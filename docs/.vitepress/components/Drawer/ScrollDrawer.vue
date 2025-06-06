<script setup>
import { Drawer } from '../../../../lib'
import './drawer.css'
</script>

<template>
  <Drawer.Root>
    <Drawer.Trigger data-trigger class="trigger relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open Drawer
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay data-overlay class="fixed inset-0 bg-black/40 z-9999"/>
      <Drawer.Content data-content class="z-9999 bg-[#0a0a0a] flex flex-col rounded-t-[10px] mt-24 h-[80%] lg:h-[320px] fixed bottom-0 left-0 right-0 outline-none">
        <div class="p-4 bg-[#0a0a0a] rounded-t-[10px] flex-1 overflow-y-auto">
          <div class="max-w-md mx-auto space-y-4 flex flex-col gap-[16px]">
            <div aria-hidden class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#222] mb-8" />
            <Drawer.Title class="font-medium mb-4 color-[#ededed]" style="font-weight: 500;">Ira Glass on Taste</Drawer.Title>
            <p class="color-[#ededed]">
              Nobody tells this to people who are beginners, I wish someone told me. All of us who do creative work,
              we get into it because we have good taste.
            </p>
            <p class="color-[#ededed] mt-4">
              But there is this gap. For the first couple years you make stuff, it’s just not that good. It’s trying
              to be good, it has potential, but it’s not. But your taste, the thing that got you into the game, is
              still killer. And your taste is why your work disappoints you. A lot of people never get past this
              phase, they quit.{' '}
            </p>
            <p class="color-[#ededed]">
              Most people I know who do interesting, creative work went through years of this. We know our work
              doesn’t have this special thing that we want it to have. We all go through this. And if you are just
              starting out or you are still in this phase, you gotta know its normal and the most important thing you
              can do is do a lot of work
            </p>
            <p class="color-[#ededed]">
              Put yourself on a deadline so that every week you will finish one story. It is only by going through a
              volume of work that you will close that gap, and your work will be as good as your ambitions. And I took
              longer to figure out how to do this than anyone I’ve ever met. It’s gonna take awhile. It’s normal to
              take awhile. You’ve just gotta fight your way through.
            </p>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>