<script setup lang="ts">
import { inject } from 'vue'
import type { DialogProps } from './Root.vue'
import { DrawerContextKey } from '../types.ts';
import Root from './Root.vue'

import { useForwardProps } from 'reka-ui'

const props = defineProps<DialogProps>()
const forwarded = useForwardProps(props)

const { onNestedDrag, onNestedOpenChange, onNestedRelease } = inject(DrawerContextKey)!;

if (!onNestedDrag) {
  throw new Error('Drawer.NestedRoot must be placed in another drawer');
}
</script>

<template>
  <Root
    v-bind="forwarded"
    nested
    :open="props.open || undefined"
    :onClose="() => {
      onNestedOpenChange(false);
    }"
    :onDrag="(e, p) => {
      onNestedDrag(e, p);
      onDrag?.(e, p);
    }"
    :onOpenChange="(o) => {
      if (o) {
        onNestedOpenChange(o);
      }
      onOpenChange?.(o);
    }"
    :onRelease="onNestedRelease"
  >
    <slot/>
  </Root>
</template>
