<script setup>
import { Drawer } from '../../lib'
</script>

<template>
  <Drawer.Root>
    <Drawer.Trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open Drawer
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content class="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
        <div class="p-4 bg-white rounded-t-[10px] flex-1">
          <div aria-hidden class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
          <div class="max-w-md mx-auto">
            <Drawer.Title class="font-medium mb-4 text-gray-900">Drawer for React.</Drawer.Title>
            <p class="text-gray-600 mb-2">
              This component can be used as a Dialog replacement on mobile and tablet devices. You can read about why
              and how it was built
              <a target="_blank" class="underline" href="https://emilkowal.ski/ui/building-a-drawer-component">
                here
              </a>
              .
            </p>
            <p class="text-gray-600 mb-2">
              This one specifically is the most simplest setup you can have, just a simple drawer with a trigger.
            </p>
          </div>
        </div>
        <div class="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
          <div class="flex gap-6 justify-end max-w-md mx-auto">
            <a
              class="text-xs text-gray-600 flex items-center gap-0.25"
              href="https://github.com/emilkowalski/vaul"
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
            <a
              class="text-xs text-gray-600 flex items-center gap-0.25"
              href="https://twitter.com/emilkowalski_"
              target="_blank"
            >
              Twitter
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