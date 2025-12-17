<script setup lang="ts">
import { ref, inject, watch, nextTick } from 'vue'
import { DialogOverlay } from 'reka-ui'
import { useRemoveScroll } from 'vue-remove-scroll'
import { DrawerContextKey } from '../types.ts'

const {
  drawerRef,
  overlayRef,
  snapPoints,
  onRelease,
  shouldFade,
  isOpen,
  modal,
  shouldAnimate
} = inject(DrawerContextKey)!

const hasSnapPoints = ref(snapPoints && snapPoints.length > 0)
const onMouseUp = (event: PointerEvent) => onRelease(event)


let _disableScroll: () => void

watch(isOpen, async open => {
  // if there is no modal, don't lock the scroll
  if (!modal) return

  if (open) {
    await nextTick()

    const { enableScroll, disableScroll } = useRemoveScroll({
      excludedElements: [drawerRef.value?.$el]
    })
    
    enableScroll()

    _disableScroll = disableScroll
  }
  else {
    _disableScroll()
  }
})
</script>

<template>
  <DialogOverlay
    v-if="modal"
    @mouseup="onMouseUp"
    ref="overlayRef"
    data-vaul-overlay=""
    :data-vaul-snap-points="isOpen && hasSnapPoints ? 'true' : 'false'"
    :data-vaul-snap-points-overlay="isOpen && shouldFade ? 'true' : 'false'"
    :data-vaul-animate="shouldAnimate ? 'true' : 'false'"
  />
</template>