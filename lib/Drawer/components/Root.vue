<script setup lang="ts">
import { DialogRoot } from 'reka-ui'

import {
  ref,
  computed,
  onMounted,
  watchEffect,
  provide,
  toRef,
} from 'vue'

import type { Ref, ComponentPublicInstance } from 'vue';

import '../style.css';
import { useSnapPoints } from '../useSnapPoints.ts';
import { set, getTranslate, dampenValue, isVertical, reset } from '../helpers.ts';
import {
  TRANSITIONS,
  VELOCITY_THRESHOLD,
  CLOSE_THRESHOLD,
  SCROLL_LOCK_TIMEOUT,
  NESTED_DISPLACEMENT,
  DRAG_CLASS,
} from '../constants.ts';

import { isIOS } from '../browser.ts';

export interface WithFadeFromProps {
  /**
   * Array of numbers from 0 to 100 that corresponds to % of the screen a given snap point should take up.
   * Should go from least visible. Example `[0.2, 0.5, 0.8]`.
   * You can also use px values, which doesn't take screen height into account.
   */
  snapPoints: (number | string)[];
  /**
   * Index of a `snapPoint` from which the overlay fade should be applied. Defaults to the last snap point.
   */
  fadeFromIndex: number;
}

export interface WithoutFadeFromProps {
  /**
   * Array of numbers from 0 to 100 that corresponds to % of the screen a given snap point should take up.
   * Should go from least visible. Example `[0.2, 0.5, 0.8]`.
   * You can also use px values, which doesn't take screen height into account.
   */
  snapPoints?: (number | string)[];
  fadeFromIndex?: never;
}

export type DialogProps = {
  activeSnapPoint?: number | string | null;
  setActiveSnapPoint?: (snapPoint: number | string | null) => void;
  open?: boolean;
  /**
   * Number between 0 and 1 that determines when the drawer should be closed.
   * Example: threshold of 0.5 would close the drawer if the user swiped for 50% of the height of the drawer or more.
   * @default 0.25
   */
  closeThreshold?: number;
  onOpenChange?: (open: boolean) => void;
  /**
   * Duration for which the drawer is not draggable after scrolling content inside of the drawer.
   * @default 500ms
   */
  scrollLockTimeout?: number;
  /**
   * When `true` only allows the drawer to be dragged by the `<Drawer.Handle />` component.
   * @default false
   */
  handleOnly?: boolean;
  /**
   * When `false` dragging, clicking outside, pressing esc, etc. will not close the drawer.
   * Use this in comination with the `open` prop, otherwise you won't be able to open/close the drawer.
   * @default true
   */
  dismissible?: boolean;
  onDrag?: (event: PointerEvent, percentageDragged: number) => void;
  onRelease?: (event: PointerEvent, open: boolean) => void;
  /**
   * When `false` it allows to interact with elements outside of the drawer without closing it.
   * @default true
   */
  modal?: boolean;
  nested?: boolean;
  onClose?: () => void;
  /**
   * Direction of the drawer. Can be `top` or `bottom`, `left`, `right`.
   * @default 'bottom'
   */
  direction?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * Opened by default, skips initial enter animation. Still reacts to `open` state changes
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * Disabled velocity based swiping for snap points.
   * This means that a snap point won't be skipped even if the velocity is high enough.
   * Useful if each snap point in a drawer is equally important.
   * @default false
   */
  snapToSequentialPoint?: boolean;
  /**
   * Gets triggered after the open or close animation ends, it receives an `open` argument with the `open` state of the drawer by the time the function was triggered.
   * Useful to revert any state changes for example.
   */
  onAnimationEnd?: (open: boolean) => void;
  autoFocus?: boolean;
} & (WithFadeFromProps | WithoutFadeFromProps);


const {
  open: openProp = undefined,
  onOpenChange,
  onDrag: onDragProp,
  onRelease: onReleaseProp,
  snapPoints,
  closeThreshold = CLOSE_THRESHOLD,
  scrollLockTimeout = SCROLL_LOCK_TIMEOUT,
  dismissible = true,
  handleOnly = false,
  fadeFromIndex: _fadeFromIndex,
  setActiveSnapPoint: setActiveSnapPointProp,
  modal = true,
  onClose,
  direction = 'bottom',
  defaultOpen = false,
  snapToSequentialPoint = false,
  onAnimationEnd,
  autoFocus = false,
  activeSnapPoint: activeSnapPointProp,
  nested: _nested,
} = defineProps<DialogProps>()

const fadeFromIndex = _fadeFromIndex ?? (snapPoints && snapPoints.length - 1)

onMounted(() => {
  window.requestAnimationFrame(() => {
    shouldAnimate.value = true;
  });

  if (!modal) {
    // Need to do this manually unfortunately
    window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = 'auto';
    });
  }

  watchEffect((onCleanup) => {
    // Trigger enter animation without using CSS animation
    if (isOpen.value) {
      set(document.documentElement, {
        scrollBehavior: 'auto',
      });

      openTime.value = new Date();
    }

    onCleanup(() => {
      reset(document.documentElement, 'scrollBehavior');
    })
  })

})

const _open = ref(openProp ?? false)

const isOpen = computed({
  get() {
    return (openProp !== undefined) ? openProp : _open.value
  },
  set(o: boolean) {
    _open.value = o

    onOpenChange?.(o);

    setTimeout(() => {
      onAnimationEnd?.(o);
    }, TRANSITIONS.DURATION * 1000);

    if (o && !modal) {
      if (typeof window !== 'undefined') {
        window.requestAnimationFrame(() => {
          document.body.style.pointerEvents = 'auto';
        });
      }
    }

    if (!o) {
      // This will be removed when the exit animation ends (`500ms`)
      document.body.style.pointerEvents = 'auto';
    }

  }
})

const hasBeenOpened = ref<boolean>(false);
const isDragging = ref<boolean>(false);
const justReleased = ref<boolean>(false);
const overlayRef = ref<ComponentPublicInstance | null>(null);
const openTime = ref<Date | null>(null);
const dragStartTime = ref<Date | null>(null);
const dragEndTime = ref<Date | null>(null);
const lastTimeDragPrevented = ref<Date | null>(null);
const isAllowedToDrag = ref<boolean>(false);
const nestedOpenChangeTimer = ref<number | null>(null);
const pointerStart = ref(0);
const keyboardIsOpen = ref(false);
const shouldAnimate = ref(!defaultOpen);
const drawerRef = ref<ComponentPublicInstance | null>(null);
const drawerHeightRef = ref(drawerRef.value?.$el.getBoundingClientRect().height || 0);
const drawerWidthRef = ref(drawerRef.value?.$el.getBoundingClientRect().width || 0);


const {
  activeSnapPoint,
  activeSnapPointIndex,
  onRelease: onReleaseSnapPoints,
  snapPointsOffset,
  onDrag: onDragSnapPoints,
  shouldFade,
  getPercentageDragged: getSnapPointsPercentageDragged
} = useSnapPoints({
  snapPoints,
  activeSnapPointProp: toRef(() => activeSnapPointProp) as Ref<number | string | null>,
  setActiveSnapPointProp,
  drawerRef,
  fadeFromIndex,
  overlayRef,
  onSnapPointChange,
  direction,
  snapToSequentialPoint,
  isOpen
});

function onSnapPointChange(activeSnapPointIndex: number, snapPointsOffset: number[]) {
  if (snapPoints && activeSnapPointIndex === snapPointsOffset.length - 1) {
    openTime.value = new Date()
  }
}

provide('drawerContext', {
  activeSnapPoint,
  snapPoints,
  drawerRef,
  overlayRef,
  onOpenChange,
  onPress,
  onRelease,
  onDrag,
  dismissible,
  shouldAnimate,
  handleOnly,
  isOpen,
  isDragging,
  shouldFade,
  closeDrawer,
  onNestedDrag,
  onNestedOpenChange,
  onNestedRelease,
  keyboardIsOpen,
  modal,
  snapPointsOffset,
  activeSnapPointIndex,
  direction,
  autoFocus,
})

function onPress(event: PointerEvent) {
  if (!dismissible && !snapPoints) return;
  if (drawerRef.value?.$el && !drawerRef.value.$el.contains(event.target as Node)) return;
  drawerHeightRef.value = drawerRef.value?.$el.getBoundingClientRect().height || 0;
  drawerWidthRef.value = drawerRef.value?.$el.getBoundingClientRect().width || 0;
  isDragging.value = true
  dragStartTime.value = new Date();

  // iOS doesn't trigger mouseUp after scrolling so we need to listen to touched in order to disallow dragging
  if (isIOS()) {
    window.addEventListener('touchend', () => (isAllowedToDrag.value = false), { once: true });
  }
  // Ensure we maintain correct pointer capture even when going outside of the drawer
  (event.target as HTMLElement).setPointerCapture(event.pointerId);

  pointerStart.value = isVertical(direction) ? event.pageY : event.pageX;
}

function shouldDrag(el: EventTarget, isDraggingInDirection: boolean) {
  let element = el as HTMLElement;
  const highlightedText = window.getSelection()?.toString();
  const swipeAmount = drawerRef.value ? getTranslate(drawerRef.value.$el, direction) : null;
  const date = new Date();

  // Fixes https://github.com/emilkowalski/vaul/issues/483
  if (element.tagName === 'SELECT') {
    return false;
  }

  if (element.hasAttribute('data-vaul-no-drag') || element.closest('[data-vaul-no-drag]')) {
    return false;
  }

  if (direction === 'right' || direction === 'left') {
    return true;
  }

  // Allow scrolling when animating
  if (openTime.value && date.getTime() - openTime.value.getTime() < 500) {
    return false;
  }

  if (swipeAmount !== null) {
    if (direction === 'bottom' ? swipeAmount > 0 : swipeAmount < 0) {
      return true;
    }
  }

  // Don't drag if there's highlighted text
  if (highlightedText && highlightedText.length > 0) {
    return false;
  }

  // Disallow dragging if drawer was scrolled within `scrollLockTimeout`
  if (
    lastTimeDragPrevented.value &&
    date.getTime() - lastTimeDragPrevented.value.getTime() < scrollLockTimeout &&
    swipeAmount === 0
  ) {
    lastTimeDragPrevented.value = date;
    return false;
  }

  if (isDraggingInDirection) {
    lastTimeDragPrevented.value = date;

    // We are dragging down so we should allow scrolling
    return false;
  }

  // Keep climbing up the DOM tree as long as there's a parent
  while (element) {
    // Check if the element is scrollable
    if (element.scrollHeight > element.clientHeight) {
      if (element.scrollTop !== 0) {
        lastTimeDragPrevented.value = new Date();

        // The element is scrollable and not scrolled to the top, so don't drag
        return false;
      }

      if (element.getAttribute('role') === 'dialog') {
        return true;
      }
    }

    // Move up to the parent element
    element = element.parentNode as HTMLElement;
  }

  // No scrollable parents not scrolled to the top found, so drag
  return true;
}

function onDrag(event: PointerEvent) {
  if (!drawerRef.value) {
    return;
  }

  // We need to know how much of the drawer has been dragged in percentages so that we can transform background accordingly
  if (isDragging.value) {
    const directionMultiplier = direction === 'bottom' || direction === 'right' ? 1 : -1;
    const draggedDistance =
      (pointerStart.value - (isVertical(direction) ? event.pageY : event.pageX)) * directionMultiplier;
    const isDraggingInDirection = draggedDistance > 0;

    // Pre condition for disallowing dragging in the close direction.
    const noCloseSnapPointsPreCondition = snapPoints && !dismissible && !isDraggingInDirection;

    // Disallow dragging down to close when first snap point is the active one and dismissible prop is set to false.
    if (noCloseSnapPointsPreCondition && activeSnapPointIndex.value === 0) return;

    // We need to capture last time when drag with scroll was triggered and have a timeout between
    const absDraggedDistance = Math.abs(draggedDistance);
    const drawerDimension =
      direction === 'bottom' || direction === 'top' ? drawerHeightRef.value : drawerWidthRef.value;

    // Calculate the percentage dragged, where 1 is the closed position
    let percentageDragged = absDraggedDistance / drawerDimension;
    const snapPointPercentageDragged = getSnapPointsPercentageDragged(absDraggedDistance, isDraggingInDirection);

    if (snapPointPercentageDragged !== null) {
      percentageDragged = snapPointPercentageDragged;
    }

    // Disallow close dragging beyond the smallest snap point.
    if (noCloseSnapPointsPreCondition && percentageDragged >= 1) {
      return;
    }

    if (!isAllowedToDrag.value && !shouldDrag(event.target!, isDraggingInDirection)) return;

    drawerRef.value.$el.classList.add(DRAG_CLASS);
    // If shouldDrag gave true once after pressing down on the drawer, we set isAllowedToDrag to true and it will remain true until we let go, there's no reason to disable dragging mid way, ever, and that's the solution to it
    isAllowedToDrag.value = true;
    set(drawerRef.value.$el, {
      transition: 'none',
    });

    set(overlayRef.value?.$el, {
      transition: 'none',
    });

    if (snapPoints) {
      onDragSnapPoints({ draggedDistance });
    }

    // Run this only if snapPoints are not defined or if we are at the last snap point (highest one)
    if (isDraggingInDirection && !snapPoints) {
      const dampenedDraggedDistance = dampenValue(draggedDistance);

      const translateValue = Math.min(dampenedDraggedDistance * -1, 0) * directionMultiplier;

      set(drawerRef.value.$el, {
        transform: isVertical(direction)
          ? `translate3d(0, ${translateValue}px, 0)`
          : `translate3d(${translateValue}px, 0, 0)`,
      });
      return;
    }

    const opacityValue = 1 - percentageDragged;

    if (shouldFade.value || (fadeFromIndex && activeSnapPointIndex.value === fadeFromIndex - 1)) {
      onDragProp?.(event, percentageDragged);

      set(
        overlayRef.value?.$el,
        {
          opacity: `${opacityValue}`,
          transition: 'none',
        },
        true,
      );
    }

    if (!snapPoints) {
      const translateValue = absDraggedDistance * directionMultiplier;

      set(drawerRef.value.$el, {
        transform: isVertical(direction)
          ? `translate3d(0, ${translateValue}px, 0)`
          : `translate3d(${translateValue}px, 0, 0)`,
      });
    }
  }
}

function closeDrawer(fromWithin?: boolean) {
  cancelDrag();
  onClose?.();

  if (!fromWithin) {
    isOpen.value = false
  }

  setTimeout(() => {
    if (snapPoints) {
      activeSnapPoint.value = snapPoints[0]
    }
  }, TRANSITIONS.DURATION * 1000); // seconds to ms
}


function resetDrawer() {
  if (!drawerRef.value) return;

  set(drawerRef.value.$el, {
    transform: 'translate3d(0, 0, 0)',
    transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
  });

  set(overlayRef.value?.$el, {
    transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
    opacity: '1',
  });
}

function cancelDrag() {
  if (!isDragging.value || !drawerRef.value) return;

  drawerRef.value.$el.classList.remove(DRAG_CLASS);
  isAllowedToDrag.value = false;
  isDragging.value = false
  dragEndTime.value = new Date();
}

function onRelease(event: PointerEvent | null) {
  if (!isDragging.value || !drawerRef.value) return;

  drawerRef.value.$el.classList.remove(DRAG_CLASS);
  isAllowedToDrag.value = false;
  isDragging.value = false
  dragEndTime.value = new Date();
  const swipeAmount = getTranslate(drawerRef.value.$el, direction);

  if (!event || !shouldDrag(event.target!, false) || !swipeAmount || Number.isNaN(swipeAmount)) return;

  if (dragStartTime.value === null) return;

  const timeTaken = dragEndTime.value.getTime() - dragStartTime.value.getTime();
  const distMoved = pointerStart.value - (isVertical(direction) ? event.pageY : event.pageX);
  const velocity = Math.abs(distMoved) / timeTaken;

  if (velocity > 0.05) {
    // `justReleased` is needed to prevent the drawer from focusing on an input when the drag ends, as it's not the intent most of the time.
    justReleased.value = true

    setTimeout(() => {
      justReleased.value = false
    }, 200);
  }

  if (snapPoints) {
    const directionMultiplier = direction === 'bottom' || direction === 'right' ? 1 : -1;
    onReleaseSnapPoints({
      draggedDistance: distMoved * directionMultiplier,
      closeDrawer,
      velocity,
      dismissible,
    });
    onReleaseProp?.(event, true);
    return;
  }

  // Moved upwards, don't do anything
  if (direction === 'bottom' || direction === 'right' ? distMoved > 0 : distMoved < 0) {
    resetDrawer();
    onReleaseProp?.(event, true);
    return;
  }

  if (velocity > VELOCITY_THRESHOLD) {
    closeDrawer();
    onReleaseProp?.(event, false);
    return;
  }

  const visibleDrawerHeight = Math.min(drawerRef.value.$el.getBoundingClientRect().height ?? 0, window.innerHeight);
  const visibleDrawerWidth = Math.min(drawerRef.value.$el.getBoundingClientRect().width ?? 0, window.innerWidth);

  const isHorizontalSwipe = direction === 'left' || direction === 'right';
  if (Math.abs(swipeAmount) >= (isHorizontalSwipe ? visibleDrawerWidth : visibleDrawerHeight) * closeThreshold) {
    closeDrawer();
    onReleaseProp?.(event, false);
    return;
  }

  onReleaseProp?.(event, true);
  resetDrawer();
}

function onNestedOpenChange(o: boolean) {
  const scale = o ? (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth : 1;

  const initialTranslate = o ? -NESTED_DISPLACEMENT : 0;

  if (nestedOpenChangeTimer.value) {
    window.clearTimeout(nestedOpenChangeTimer.value);
  }

  set(drawerRef.value?.$el, {
    transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
    transform: isVertical(direction)
      ? `scale(${scale}) translate3d(0, ${initialTranslate}px, 0)`
      : `scale(${scale}) translate3d(${initialTranslate}px, 0, 0)`,
  });

  if (!o && drawerRef.value) {
    nestedOpenChangeTimer.value = setTimeout(() => {
      const translateValue = getTranslate(drawerRef.value?.$el as HTMLElement, direction);
      set(drawerRef.value?.$el, {
        transition: 'none',
        transform: isVertical(direction)
          ? `translate3d(0, ${translateValue}px, 0)`
          : `translate3d(${translateValue}px, 0, 0)`,
      });
    }, 500);
  }
}

function onNestedDrag(_event: PointerEvent, percentageDragged: number) {
  if (percentageDragged < 0) return;

  const initialScale = (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth;
  const newScale = initialScale + percentageDragged * (1 - initialScale);
  const newTranslate = -NESTED_DISPLACEMENT + percentageDragged * NESTED_DISPLACEMENT;

  set(drawerRef.value?.$el, {
    transform: isVertical(direction)
      ? `scale(${newScale}) translate3d(0, ${newTranslate}px, 0)`
      : `scale(${newScale}) translate3d(${newTranslate}px, 0, 0)`,
    transition: 'none',
  });
}

function onNestedRelease(_event: PointerEvent, o: boolean) {
  const dim = isVertical(direction) ? window.innerHeight : window.innerWidth;
  const scale = o ? (dim - NESTED_DISPLACEMENT) / dim : 1;
  const translate = o ? -NESTED_DISPLACEMENT : 0;

  if (o) {
    set(drawerRef.value?.$el, {
      transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
      transform: isVertical(direction)
        ? `scale(${scale}) translate3d(0, ${translate}px, 0)`
        : `scale(${scale}) translate3d(${translate}px, 0, 0)`,
    });
  }
}
</script>

<template>
  <DialogRoot
    :defaultOpen
    @update:open="open => {
      if (!dismissible && !open) return;
      if (open) {
        hasBeenOpened = true
      } else {
        closeDrawer(true);
      }

      isOpen = open
    }"
    :open="isOpen"
  >
    <slot/>
  </DialogRoot>
</template>