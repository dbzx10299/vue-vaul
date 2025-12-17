<script setup lang="ts">
import type { DrawerDirection } from '../types'
import { DialogContent } from 'reka-ui'
import { inject, ref, watch } from 'vue'
import { DrawerContextKey } from '../types.ts'

interface ContentProps {
  onPointerDownOutside?: (event: PointerEvent) => void
  onOpenAutoFocus?: (event: PointerEvent) => void
  onPointerDown?: (event: PointerEvent) => void
  onPointerMove?: (event: PointerEvent) => void
  onPointerUp?: (event: PointerEvent) => void
  onPointerOut?: (event: PointerEvent) => void
}

const { onPointerDownOutside, onOpenAutoFocus, ...rest } = defineProps<ContentProps>()

const {
  drawerRef,
  onPress,
  onRelease,
  onDrag,
  keyboardIsOpen,
  snapPointsOffset,
  activeSnapPointIndex,
  modal,
  isOpen,
  direction,
  snapPoints,
  handleOnly,
  shouldAnimate,
  autoFocus,
} = inject(DrawerContextKey)!
// Needed to use transition instead of animations
const delayedSnapPoints = ref(false)
const pointerStartRef = ref<{ x: number, y: number } | null>(null)
const lastKnownPointerEventRef = ref<PointerEvent | null>(null)
const wasBeyondThePointRef = ref(false)
const hasSnapPoints = ref(snapPoints && snapPoints.length > 0)

function isDeltaInDirection(delta: { x: number, y: number }, direction: DrawerDirection, threshold = 0) {
  if (wasBeyondThePointRef.value)
    return true

  const deltaY = Math.abs(delta.y)
  const deltaX = Math.abs(delta.x)
  const isDeltaX = deltaX > deltaY
  const dFactor = ['bottom', 'right'].includes(direction) ? 1 : -1

  if (direction === 'left' || direction === 'right') {
    const isReverseDirection = delta.x * dFactor < 0
    if (!isReverseDirection && deltaX >= 0 && deltaX <= threshold) {
      return isDeltaX
    }
  }
  else {
    const isReverseDirection = delta.y * dFactor < 0
    if (!isReverseDirection && deltaY >= 0 && deltaY <= threshold) {
      return !isDeltaX
    }
  }

  wasBeyondThePointRef.value = true
  return true
}

watch(isOpen, () => {
  if (hasSnapPoints.value) {
    window.requestAnimationFrame(() => {
      delayedSnapPoints.value = true
    })

    delayedSnapPoints.value = false
  }
})

function handleOnPointerUp(event: PointerEvent | null) {
  pointerStartRef.value = null
  wasBeyondThePointRef.value = false
  onRelease(event)
}
</script>

<template>
  <DialogContent
    ref="drawerRef"
    :data-vaul-drawer-direction="direction"
    data-vaul-drawer=""
    :data-vaul-delayed-snap-points="delayedSnapPoints ? 'true' : 'false'"
    :data-vaul-snap-points="isOpen && hasSnapPoints ? 'true' : 'false'"
    :data-vaul-animate="shouldAnimate ? 'true' : 'false'"
    :style="{
      ...(snapPointsOffset && snapPointsOffset.length > 0 && {
        '--snap-point-height': `${snapPointsOffset[activeSnapPointIndex ?? 0]!}px`,
      }),
    }"

    @pointerdown="(event: PointerEvent) => {
      if (handleOnly) return;
      rest.onPointerDown?.(event);
      pointerStartRef = { x: event.pageX, y: event.pageY };
      onPress(event);
    }"
    @pointermove="(event: PointerEvent) => {
      lastKnownPointerEventRef = event;
      if (handleOnly) return;
      rest.onPointerMove?.(event);
      if (!pointerStartRef) return;
      const yPosition = event.pageY - pointerStartRef.y;
      const xPosition = event.pageX - pointerStartRef.x;

      const swipeStartThreshold = event.pointerType === 'touch' ? 10 : 2;
      const delta = { x: xPosition, y: yPosition };

      const isAllowedToSwipe = isDeltaInDirection(delta, direction, swipeStartThreshold);
      if (isAllowedToSwipe) onDrag(event);
      else if (Math.abs(xPosition) > swipeStartThreshold || Math.abs(yPosition) > swipeStartThreshold) {
        pointerStartRef = null;
      }
    }"
    @open-auto-focus="e => {
      onOpenAutoFocus?.(e as any);

      if (!autoFocus) {
        e.preventDefault();
      }
    }"
    @pointer-down-outside="(e) => {
      onPointerDownOutside?.(e as any);

      if (!modal || e.defaultPrevented) {
        e.preventDefault();
        return;
      }

      if (keyboardIsOpen) {
        keyboardIsOpen = false;
      }
    }"
    @pointerup="(event: PointerEvent) => {
      rest.onPointerUp?.(event);
      pointerStartRef = null;
      wasBeyondThePointRef = false;
      onRelease(event);
    }"
    @pointerout="(event: PointerEvent) => {
      rest.onPointerOut?.(event);
      handleOnPointerUp(lastKnownPointerEventRef);
    }"
    @focus-outside="(e) => {
      if (!modal) {
        e.preventDefault();
        return;
      }
    }"
  >
    <slot />
  </DialogContent>
</template>
