<script setup lang="ts">
import { DialogPortal, useForwardProps } from 'reka-ui'

export interface PortalProps {
  to?: string | HTMLElement
  disabled?: boolean
  defer?: boolean
  forceMount?: boolean
}

const props = defineProps<PortalProps>()

const forwardProps = useForwardProps(props)
</script>

<template>
  <DialogPortal v-bind="forwardProps">
    <slot />
  </DialogPortal>
</template>
