<script setup>
import { ref } from 'vue'
import { Drawer } from '../../../../lib'
import './drawer.css'

const open = ref(false)
</script>

<template>
  <Drawer.Root :open :onOpenChange="o => (open = o)">
    <Drawer.Trigger data-trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay data-overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content data-content class="bg-[#0a0a0a] flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
        <div class="p-4 bg-[#0a0a0a] rounded-t-[10px] flex-1">
          <div class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#222] mb-8" />
          <div class="max-w-md mx-auto">
            <Drawer.Title class="font-medium mb-4 color-[#ededed]">A controlled drawer.</Drawer.Title>
            <p class="color-[#ededed] mb-2">
              This means that the drawer no longer manages its own state. Instead, you can control it programmatically
              from the outside.
            </p>
            <p class="color-[#ededed] mb-2">
              But you can still let the drawer help you a bit by passing the `onOpenChange` prop. This way, the drawer
              will change your open state when the user clicks outside of it, or when they press the escape key for
              example.
            </p>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 16px;
}

p {
  margin-bottom: 16px;
}
</style>