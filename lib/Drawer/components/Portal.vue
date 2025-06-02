<script setup lang="ts">
import { DialogPortal } from 'reka-ui'
import { useForwardProps } from 'reka-ui';

type PortalProps = {
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
    <slot/>
  </DialogPortal>
</template>