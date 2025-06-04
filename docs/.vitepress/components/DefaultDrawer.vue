<script setup>
import { Drawer } from '../../../lib'
</script>

<template>
  <Drawer.Root>
    <Drawer.Trigger class="trigger">
      Open Drawer
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content class="content z-9999 bg-[#0a0a0a] flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
        <div class="p-4 bg-[#0a0a0a] rounded-t-[10px] flex-1">
          <div class="flex flex-col gap-[12px]">
            <Drawer.Title style="font-size: 18px; font-weight: 600;" class="font-bold mb-4 color-[#ededed]">Drawer for Vue.</Drawer.Title>
            <p class="color-[#ededed] mb-2 text-sm">
              This component can be used as a Dialog replacement on mobile and tablet devices. You can read about why
              and how it was built
              <a target="_blank" class="underline" href="https://emilkowal.ski/ui/building-a-drawer-component">
                here
              </a>
              .
            </p>
            <p class="color-[#ededed] mb-2 text-sm">
              This one specifically is the most simplest setup you can have, just a simple drawer with a trigger.
            </p>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>

<style scoped>
.trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 40px;
  color: #0a0a0a;
  background: #ededed;
  font-weight: 500;
  border-radius: 6px;
  max-width: 100%;
  font-size: .875rem;
  transition: all 200ms ease;
  cursor: pointer;
}

.trigger:hover {
  background: #d4d4d4;
}

.content {
  padding: 32px 24px 24px;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.145),0px 1px 1px rgba(0,0,0,0.02),0px 4px 8px -4px rgba(0,0,0,0.04),0px 16px 24px -8px rgba(0,0,0,0.06);
}
</style>