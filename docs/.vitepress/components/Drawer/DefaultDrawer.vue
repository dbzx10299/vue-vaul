<script setup>
import { Drawer } from '../../../../lib'
import './drawer.css'
</script>

<template>
  <Drawer.Root>
    <Drawer.Trigger data-trigger>
      Open
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay data-overlay class="fixed inset-0 bg-black/40 z-9999"/>
      <Drawer.Content data-content class="content z-9999 bg-[#0a0a0a] rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
        <div class="p-8 bg-[#0a0a0a] rounded-t-[10px] flex-1">
          <div class="max-w-md mx-auto">
            <Drawer.Title class="font-bold mb-4 color-[#ededed]">Drawer for Vue.</Drawer.Title>
            <p class="color-[#ededed] mb-2">
              This component can be used as a Dialog replacement on mobile and tablet devices. You can read about why
              and how it was built
              <a target="_blank" class="underline" href="https://emilkowal.ski/ui/building-a-drawer-component">
                here
              </a>
              .
            </p>
            <p class="color-[#ededed] mb-2">
              This one specifically is the most simplest setup you can have, just a simple drawer with a trigger.
            </p>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>

<style scoped>
h2 {
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
}

p {
  margin-bottom: 16px;
}
</style>