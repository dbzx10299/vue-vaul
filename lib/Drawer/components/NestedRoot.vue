<script setup lang="ts">
import type { DialogProps } from './Root.vue'
import { useForwardProps } from 'reka-ui'
import { inject } from 'vue'
import { DrawerContextKey } from '../types.ts'

import Root from './Root.vue'

const props = defineProps<DialogProps>()
const forwarded = useForwardProps(props)

const { onNestedDrag, onNestedOpenChange, onNestedRelease } = inject(DrawerContextKey)!

if (!onNestedDrag) {
  throw new Error('Drawer.NestedRoot must be placed in another drawer')
}
</script>

<template>
  <Root
    v-bind="forwarded"
    nested
    :open="props.open || undefined"
    :on-close="() => {
      onNestedOpenChange(false);
    }"
    :on-drag="(e, p) => {
      onNestedDrag(e, p);
      onDrag?.(e, p);
    }"
    :on-open-change="(o) => {
      if (o) {
        onNestedOpenChange(o);
      }
      onOpenChange?.(o);
    }"
    :on-release="onNestedRelease"
  >
    <slot />
  </Root>
</template>
