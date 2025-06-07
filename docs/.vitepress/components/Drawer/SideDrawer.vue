<script setup>
import { Drawer } from '../../../../lib'
import './drawer.css'
</script>

<template>
  <Drawer.Root direction="right">
    <Drawer.Trigger data-trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay data-overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content
        data-content
        class="right-0 top-0 bottom-0 fixed z-10 outline-none w-[310px] flex"
        :style="{
          'border-top-left-radius': '16px',
          'border-bottom-left-radius': '16px',
          '--initial-transform': 'calc(100% + 8px)'
        }"
      >
        <div class="bg-[#0a0a0a] h-full w-full grow p-5 flex flex-col rounded-[16px]">
          <div class="max-w-md mx-auto">
            <Drawer.Title class="font-medium mb-2 color-[#ededed]">It supports all directions.</Drawer.Title>
            <Drawer.Description class="color-[#ededed] mb-2">
              This one specifically is not touching the edge of the screen, but that&apos;s not required for a side
              drawer.
            </Drawer.Description>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>

<style scoped>
h2 {
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: 500;
}

p {
  margin-bottom: 16px;
}
</style>