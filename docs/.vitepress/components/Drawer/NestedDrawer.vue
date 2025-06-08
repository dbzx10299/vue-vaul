<script setup lang="ts">
import { Drawer } from '../../../../lib'
import './drawer.css'
</script>

<template>
  <Drawer.Root>
    <Drawer.Trigger data-trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay data-overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content data-content class="bg-[#0a0a0a] flex flex-col rounded-t-[10px] h-full mt-24 lg:h-fit max-h-[96%] fixed bottom-0 left-0 right-0">
        <div class="p-4 bg-[#0a0a0a] rounded-t-[10px] flex-1">
          <div class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#222] mb-8" />
          <div class="max-w-md mx-auto">
            <Drawer.Title class="font-medium mb-4 color-[#ededed]">Nested Drawers.</Drawer.Title>
            <p class="color-[#ededed] mb-2">
              Nesting drawers creates a
              <a href="https://sonner.emilkowal.ski/" target="_blank" class="underline">
                Sonner-like
              </a>
              stacking effect .
            </p>
            <p class="color-[#ededed] mb-2">
              You can nest as many drawers as you want. All you need to do is add a `Drawer.NestedRoot` component
              instead of `Drawer.Root`.
            </p>
            <Drawer.NestedRoot>
              <Drawer.Trigger data-trigger class="rounded-md mt-4 w-full bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                Open Second Drawer
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay data-overlay class="fixed inset-0 bg-black/40" />
                <Drawer.Content data-content class="bg-[#0a0a0a] flex flex-col rounded-t-[10px] lg:h-[327px] h-full mt-24 max-h-[94%] fixed bottom-0 left-0 right-0">
                  <div class="p-4 bg-[#0a0a0a] rounded-t-[10px] flex-1">
                    <div class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#222] mb-8" />
                    <div class="max-w-md mx-auto">
                      <Drawer.Title class="font-medium mb-4 text-gray-100">This drawer is nested.</Drawer.Title>
                      <p class="color-[#ededed] mb-2">
                        If you pull this drawer down a bit, it&apos;ll scale the drawer underneath it as well.
                      </p>
                    </div>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.NestedRoot>
          </div>
        </div>
        <div class="p-4 bg-[#0a0a0a] mt-auto">
          <div class="flex gap-6 justify-end max-w-md mx-auto">
            <a
              class="text-xs text-gray-600 flex items-center gap-0.25"
              href="https://github.com/dbzx10299/vue-vaul"
              target="_blank"
            >
              GitHub
              <svg
                fill="none"
                height="16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="16"
                aria-hidden="true"
                class="w-3 h-3 ml-1"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
            </a>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>

<style scoped>
h2 {
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
}

p {
  margin-bottom: 16px;
}
</style>