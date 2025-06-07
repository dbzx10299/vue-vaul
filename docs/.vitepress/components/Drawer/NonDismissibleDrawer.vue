<script setup>
import { ref } from 'vue'
import { Drawer } from '../../../../lib'
import './drawer.css'

const isOpen = ref(false)
</script>

<template>
  <Drawer.Root :dismissible="false" :open="isOpen" :onOpenChange="open => (isOpen = open)">
    <Drawer.Trigger data-trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay data-overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content data-content class="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
        <div class="p-4 bg-[#0a0a0a] rounded-t-[10px] flex-1">
          <div class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#222] mb-8" />
          <div class="max-w-md mx-auto">
            <Drawer.Title class="font-medium mb-4 text-gray-100">A non-dismissible drawer.</Drawer.Title>
            <p class="color-[#ededed] mb-2">For cases when your drawer has to be always visible.</p>
            <p class="color-[#ededed] mb-2">
              Nothing will close it unless you make it controlled and close it programmatically.
            </p>
            <button
              class="dismissible-btn rounded-md mt-4 w-full bg-[#0a0a0a] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              @click="() => isOpen = false"
            >
              Close Drawer
            </button>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>

<style scoped>
.dismissible-btn {
  color: #0a0a0a;
  background: #ededed;
  height: 40px;
}

h2 {
  margin-bottom: 16px;
  font-weight: 500;
}

p {
  margin-bottom: 16px;
}
</style>