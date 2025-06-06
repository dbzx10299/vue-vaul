<script setup>
import { Drawer } from '../../../../lib'
import './drawer.css'
</script>

<template>
<Drawer.Root :modal="false">
  <Drawer.Trigger data-trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
    Open Drawer
  </Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Overlay data-overlay class="fixed inset-0 bg-black/40" />
    <Drawer.Content data-content class="flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
      <div class="p-4 bg-[#0a0a0a] rounded-t-[10px] flex-1">
        <div class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#222] mb-8" />
        <div class="max-w-md mx-auto">
          <Drawer.Title class="mb-4 color-[#ededed]">What does non-modal mean?</Drawer.Title>
          <p class="color-[#ededed] mb-2">
            The default behavior for the drawer is to restrict interactions to the dialog itself. This means that
            you can&apos;t interact with other content on the page.
          </p>
          <p class="color-[#ededed] mb-2">
            But sometimes you want to allow those interactions. Setting `modal` to `false` will let you scroll the
            page, click on other elements, etc.
          </p>
        </div>
      </div>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>
</template>

<style scoped>
[data-content] {
  background: #0a0a0a;
  color: #ededed;
}

h2 {
  font-weight: 500;
  margin-bottom: 16px;
}

p {
  margin-bottom: 16px;
}
</style>