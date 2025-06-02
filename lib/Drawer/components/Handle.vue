<script setup lang="ts">
import { ref, inject } from 'vue'
import type { DrawerContext } from '../types';

export type HandleProps = {
  preventCycle?: boolean;
};

const LONG_HANDLE_PRESS_TIMEOUT = 250;
const DOUBLE_TAP_TIMEOUT = 120;

const { preventCycle = false } = defineProps<HandleProps>()

const {
  closeDrawer,
  isDragging,
  snapPoints,
  activeSnapPoint,
  dismissible,
  handleOnly,
  isOpen,
  onPress,
  onDrag,
} = inject('drawerContext') as DrawerContext;

const closeTimeoutIdRef = ref<number | null>(null);
const shouldCancelInteractionRef = ref(false);

function handleStartCycle() {
  // Stop if this is the second click of a double click
  if (shouldCancelInteractionRef.value) {
    handleCancelInteraction();
    return;
  }
  window.setTimeout(() => {
    handleCycleSnapPoints();
  }, DOUBLE_TAP_TIMEOUT);
}

function handleCycleSnapPoints() {
  // Prevent accidental taps while resizing drawer
  if (isDragging.value || preventCycle || shouldCancelInteractionRef.value) {
    handleCancelInteraction();
    return;
  }
  // Make sure to clear the timeout id if the user releases the handle before the cancel timeout
  handleCancelInteraction();

  if (!snapPoints || snapPoints.length === 0) {
    if (!dismissible) {
      closeDrawer();
    }
    return;
  }

  const isLastSnapPoint = activeSnapPoint!.value === snapPoints[snapPoints.length - 1];

  if (isLastSnapPoint && dismissible) {
    closeDrawer();
    return;
  }

  const currentSnapIndex = snapPoints.findIndex((point) => point === activeSnapPoint!.value);
  if (currentSnapIndex === -1) return; // activeSnapPoint not found in snapPoints
  const nextSnapPoint = snapPoints[currentSnapIndex + 1];
  activeSnapPoint!.value = nextSnapPoint
}

function handleStartInteraction() {
  closeTimeoutIdRef.value = window.setTimeout(() => {
    // Cancel click interaction on a long press
    shouldCancelInteractionRef.value = true;
  }, LONG_HANDLE_PRESS_TIMEOUT);
}

function handleCancelInteraction() {
  if (closeTimeoutIdRef.value) {
    window.clearTimeout(closeTimeoutIdRef.value);
  }
  shouldCancelInteractionRef.value = false;
}
</script>

<template>
  <div
    @click="handleStartCycle"
    @pointercancel="handleCancelInteraction"
    @pointerdown="(e) => {
      if (handleOnly) onPress(e);
      handleStartInteraction();
    }"
    @pointermove="e => {
      if (handleOnly) onDrag(e)
    }"
    :data-vaul-drawer-visible="isOpen ? 'true' : 'false'"
    data-vaul-handle=""
    aria-hidden="true"
  >
    <!-- Expand handle's hit area beyond what's visible to ensure a 44x44 tap target for touch devices -->
    <span data-vaul-handle-hitarea="" aria-hidden="true">
      <slot/>
    </span>
  </div>
</template>