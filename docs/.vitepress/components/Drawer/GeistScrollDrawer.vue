<script setup>
import { Drawer } from 'geist-vaul'
import './drawer.css'
</script>

<template>
  <Drawer.Root>
    <Drawer.Trigger data-trigger class="trigger relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay data-overlay class="fixed inset-0 bg-black/40 z-9999"/>
      <Drawer.Content data-content class="z-9999 bg-[#0a0a0a] flex flex-col rounded-t-[10px] mt-24 h-[80%] lg:h-[320px] fixed bottom-0 left-0 right-0 outline-none">
        <div class="new-dialog_inner">
          <div class="modal-body">
            <div>
              <Drawer.Title class="font-mSdium m-4 color-[#ededed]" style="font-weight: 600; font-size: 18px; margin: 24px 0;">Create Token</Drawer.Title>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
              <p class="color-[#ededed]">Some content contained within the modal.</p>
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>

<style scoped>
p {
  font-size: 14px;
  line-height: 1.25rem;
  font-weight: 400;
}

.new-dialog_inner {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  outline: none;
  overflow-y: auto;
  overscroll-behavior: none;
  z-index: 1;
  background: #0a0a0a;
}

.modal-body {
  font-size: 14px;
  line-height: 1.6;
  padding: 0 24px 24px;
  overflow-x: hidden;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow-y: auto;
}
</style>