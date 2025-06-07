import { ref, computed, onBeforeUnmount, onMounted, watchEffect } from 'vue'
import type { Ref, ComponentPublicInstance } from 'vue'

import { set, isVertical } from './helpers.ts';
import { TRANSITIONS, VELOCITY_THRESHOLD } from './constants.ts';
import type { DrawerDirection } from './types.ts';

export function useSnapPoints({
  activeSnapPointProp,
  setActiveSnapPointProp,
  snapPoints,
  drawerRef,
  overlayRef,
  fadeFromIndex,
  onSnapPointChange,
  direction = 'bottom',
  snapToSequentialPoint,
}: {
  activeSnapPointProp?: Ref<number | string | null>;
  setActiveSnapPointProp?(snapPoint: number | null | string): void;
  snapPoints?: (number | string)[];
  fadeFromIndex?: number;
  drawerRef: Ref<ComponentPublicInstance | null>;
  overlayRef: Ref<ComponentPublicInstance | null>;
  onSnapPointChange(activeSnapPointIndex: number): void;
  direction?: DrawerDirection;
  snapToSequentialPoint?: boolean;
}) {

  const _activeSnapPoint = ref(snapPoints?.[0] ?? null)

  const activeSnapPoint = computed({
    get() {
      return (activeSnapPointProp?.value !== undefined) ? activeSnapPointProp?.value : _activeSnapPoint.value
    },
    set(val) {
      _activeSnapPoint.value = val
      setActiveSnapPointProp?.(val)
    }
  })

  const windowDimensions = ref(
    typeof window !== 'undefined'
      ? {
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        }
      : undefined,
  );

  function onResize() {
    windowDimensions.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    }
  }

  onMounted(() => {
    window.addEventListener('resize', onResize);
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
  })

  const isLastSnapPoint = computed(() => activeSnapPoint.value === snapPoints?.[snapPoints.length - 1] || null)

  const activeSnapPointIndex = computed(() => snapPoints?.findIndex((snapPoint) => snapPoint === activeSnapPoint.value) ?? null)

  const shouldFade = computed(() => (
    (snapPoints &&
    snapPoints.length > 0 &&
    (fadeFromIndex || fadeFromIndex === 0) &&
    !Number.isNaN(fadeFromIndex) &&
    snapPoints[fadeFromIndex] === activeSnapPoint.value
    ) || !snapPoints)
  )

  const snapPointsOffset = computed(() => {
    const containerSize = typeof window !== 'undefined'
      ? { width: window.innerWidth, height: window.innerHeight }
      : { width: 0, height: 0 };

    return (
      snapPoints?.map((snapPoint) => {
        const isPx = typeof snapPoint === 'string';
        let snapPointAsNumber = 0;

        if (isPx) {
          snapPointAsNumber = parseInt(snapPoint, 10);
        }

        if (isVertical(direction)) {
          const height = isPx ? snapPointAsNumber : windowDimensions.value ? snapPoint * containerSize.height : 0;

          if (windowDimensions.value) {
            return direction === 'bottom' ? containerSize.height - height : -containerSize.height + height;
          }

          return height;
        }
        const width = isPx ? snapPointAsNumber : windowDimensions.value ? snapPoint * containerSize.width : 0;

        if (windowDimensions.value) {
          return direction === 'right' ? containerSize.width - width : -containerSize.width + width;
        }

        return width;
      }) ?? []
    );
  })

  const activeSnapPointOffset = computed(
    () => (activeSnapPointIndex.value !== null ? snapPointsOffset.value?.[activeSnapPointIndex.value] : null)
  );

  const snapToPoint = (dimension: number) => {
    const newSnapPointIndex = snapPointsOffset.value?.findIndex((snapPointDim) => snapPointDim === dimension) ?? null;
    onSnapPointChange(newSnapPointIndex);

    set(drawerRef.value?.$el, {
      transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
      transform: isVertical(direction) ? `translate3d(0, ${dimension}px, 0)` : `translate3d(${dimension}px, 0, 0)`,
    });

    if (
      snapPointsOffset.value &&
      newSnapPointIndex !== snapPointsOffset.value.length - 1 &&
      fadeFromIndex !== undefined &&
      newSnapPointIndex !== fadeFromIndex &&
      newSnapPointIndex < fadeFromIndex
    ) {
      set(overlayRef.value?.$el, {
        transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
        opacity: '0',
      });
    } else {
      set(overlayRef.value?.$el, {
        transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
        opacity: '1',
      });
    }

    activeSnapPoint.value = snapPoints?.[Math.max(newSnapPointIndex, 0)] ?? null
  }

  watchEffect(() => {
    if (activeSnapPoint.value || activeSnapPointProp?.value) {
      const newIndex =
        snapPoints?.findIndex((snapPoint) => snapPoint === activeSnapPointProp?.value || snapPoint === activeSnapPoint.value) ?? -1;
      if (snapPointsOffset.value && newIndex !== -1 && typeof snapPointsOffset.value[newIndex] === 'number') {
        snapToPoint(snapPointsOffset.value[newIndex] as number);
      }
    }
  })


  function onRelease({
    draggedDistance,
    closeDrawer,
    velocity,
    dismissible,
  }: {
    draggedDistance: number;
    closeDrawer: () => void;
    velocity: number;
    dismissible: boolean;
  }) {
    if (fadeFromIndex === undefined) return;

    const currentPosition =
      direction === 'bottom' || direction === 'right'
        ? (activeSnapPointOffset.value ?? 0) - draggedDistance
        : (activeSnapPointOffset.value ?? 0) + draggedDistance;
    const isOverlaySnapPoint = activeSnapPointIndex.value === fadeFromIndex - 1;
    const isFirst = activeSnapPointIndex.value === 0;
    const hasDraggedUp = draggedDistance > 0;

    if (isOverlaySnapPoint) {
      set(overlayRef.value?.$el, {
        transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
      });
    }

    if (!snapToSequentialPoint && velocity > 2 && !hasDraggedUp) {
      if (dismissible) closeDrawer();
      else snapToPoint(snapPointsOffset.value[0]); // snap to initial point
      return;
    }

    if (!snapToSequentialPoint && velocity > 2 && hasDraggedUp && snapPointsOffset.value && snapPoints) {
      snapToPoint(snapPointsOffset.value[snapPoints.length - 1] as number);
      return;
    }

    // Find the closest snap point to the current position
    const closestSnapPoint = snapPointsOffset.value?.reduce((prev, curr) => {
      if (typeof prev !== 'number' || typeof curr !== 'number') return prev;

      return Math.abs(curr - currentPosition) < Math.abs(prev - currentPosition) ? curr : prev;
    });

    const dim = isVertical(direction) ? window.innerHeight : window.innerWidth;
    if (velocity > VELOCITY_THRESHOLD && Math.abs(draggedDistance) < dim * 0.4) {
      const dragDirection = hasDraggedUp ? 1 : -1; // 1 = up, -1 = down

      // Don't do anything if we swipe upwards while being on the last snap point
      if (dragDirection > 0 && isLastSnapPoint.value && snapPoints) {
        snapToPoint(snapPointsOffset.value[snapPoints.length - 1]);
        return;
      }

      if (isFirst && dragDirection < 0 && dismissible) {
        closeDrawer();
      }

      if (activeSnapPointIndex.value === null) return;

      snapToPoint(snapPointsOffset.value[activeSnapPointIndex.value + dragDirection]);
      return;
    }

    snapToPoint(closestSnapPoint);
  }

  function onDrag({ draggedDistance }: { draggedDistance: number }) {
    if (activeSnapPointOffset.value === null) return;
    const newValue =
      direction === 'bottom' || direction === 'right'
        ? activeSnapPointOffset.value - draggedDistance
        : activeSnapPointOffset.value + draggedDistance;

    // Don't do anything if we exceed the last(biggest) snap point
    if ((direction === 'bottom' || direction === 'right') && newValue < snapPointsOffset.value[snapPointsOffset.value.length - 1]) {
      return;
    }
    if ((direction === 'top' || direction === 'left') && newValue > snapPointsOffset.value[snapPointsOffset.value.length - 1]) {
      return;
    }

    set(drawerRef.value?.$el, {
      transform: isVertical(direction) ? `translate3d(0, ${newValue}px, 0)` : `translate3d(${newValue}px, 0, 0)`,
    });
  }

  function getPercentageDragged(absDraggedDistance: number, isDraggingDown: boolean) {
    if (!snapPoints || typeof activeSnapPointIndex.value !== 'number' || !snapPointsOffset.value || fadeFromIndex === undefined)
      return null;

    // If this is true we are dragging to a snap point that is supposed to have an overlay
    const isOverlaySnapPoint = activeSnapPointIndex.value === fadeFromIndex - 1;
    const isOverlaySnapPointOrHigher = activeSnapPointIndex.value >= fadeFromIndex;

    if (isOverlaySnapPointOrHigher && isDraggingDown) {
      return 0;
    }

    // Don't animate, but still use this one if we are dragging away from the overlaySnapPoint
    if (isOverlaySnapPoint && !isDraggingDown) return 1;
    if (!shouldFade.value && !isOverlaySnapPoint) return null;

    // Either fadeFrom index or the one before
    const targetSnapPointIndex = isOverlaySnapPoint ? activeSnapPointIndex.value + 1 : activeSnapPointIndex.value - 1;

    // Get the distance from overlaySnapPoint to the one before or vice-versa to calculate the opacity percentage accordingly
    const snapPointDistance = isOverlaySnapPoint
      ? snapPointsOffset.value[targetSnapPointIndex] - snapPointsOffset.value[targetSnapPointIndex - 1]
      : snapPointsOffset.value[targetSnapPointIndex + 1] - snapPointsOffset.value[targetSnapPointIndex];

    const percentageDragged = absDraggedDistance / Math.abs(snapPointDistance);

    if (isOverlaySnapPoint) {
      return 1 - percentageDragged;
    } else {
      return percentageDragged;
    }
  }

  return {
    isLastSnapPoint,
    activeSnapPoint,
    shouldFade,
    getPercentageDragged,
    activeSnapPointIndex,
    onRelease,
    onDrag,
    snapPointsOffset,
  };
}
