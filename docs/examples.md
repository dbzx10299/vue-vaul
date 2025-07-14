<script setup>
import CodePreview from './.vitepress/components/CodePreview.vue'
import DefaultDrawer from './.vitepress/components/Drawer/DefaultDrawer.vue'
import ScrollDrawer from './.vitepress/components/Drawer/ScrollDrawer.vue'
import SnapDrawer from './.vitepress/components/Drawer/SnapDrawer.vue'
import SnapSequentialDrawer from './.vitepress/components/Drawer/SnapSequentialDrawer.vue'
import CustomFadeFromIndexDrawer from './.vitepress/components/Drawer/CustomFadeFromIndexDrawer.vue'
import NonModalDrawer from './.vitepress/components/Drawer/NonModalDrawer.vue'
import NonDismissibleDrawer from './.vitepress/components/Drawer/NonDismissibleDrawer.vue'
import ControlledDrawer from './.vitepress/components/Drawer/ControlledDrawer.vue'
import NestedDrawer from './.vitepress/components/Drawer/NestedDrawer.vue'
import SideDrawer from './.vitepress/components/Drawer/SideDrawer.vue'

const defaultDrawer = `
<script setup lang=\"ts\">
import { Drawer } from 'vue-vaul'
<\/script>

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
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>
`;


const scrollDrawer = `
<script setup lang=\"ts\">
import { Drawer } from 'vue-vaul'
<\/script>

<template>
  <Drawer.Root>
    <Drawer.Trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open Drawer
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content class="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-[80%] lg:h-[320px] fixed bottom-0 left-0 right-0 outline-none">
        <div class="p-4 bg-white rounded-t-[10px] flex-1 overflow-y-auto">
          <div class="max-w-md mx-auto space-y-4">
            <div aria-hidden class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            <Drawer.Title class="font-medium mb-4 text-gray-900">Ira Glass on Taste</Drawer.Title>
            <p class="text-gray-600">
              Nobody tells this to people who are beginners, I wish someone told me. All of us who do creative work,
              we get into it because we have good taste.
            </p>
            <p class="text-gray-600">
              But there is this gap. For the first couple years you make stuff, it’s just not that good. It’s trying
              to be good, it has potential, but it’s not. But your taste, the thing that got you into the game, is
              still killer. And your taste is why your work disappoints you. A lot of people never get past this
              phase, they quit.
            </p>
            <p class="text-gray-600">
              Most people I know who do interesting, creative work went through years of this. We know our work
              doesn’t have this special thing that we want it to have. We all go through this. And if you are just
              starting out or you are still in this phase, you gotta know its normal and the most important thing you
              can do is do a lot of work
            </p>
            <p class="text-gray-600">
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
`;


const snapDrawer = `
<script setup lang=\"ts\">
import { ref } from 'vue'
import { Drawer } from 'vue-vaul'

const snapPoints = ['148px', '355px', 1]

const snap = ref<string | number | null>(snapPoints[0])
<\/script>

<template>
  <Drawer.Root
    :snapPoints
    :activeSnapPoint="snap"
    :setActiveSnapPoint="snapPoint => (snap = snapPoint)"
  >
    <Drawer.Trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open Drawer
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content
        data-testid="content"
        class="fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]"
      >
        <div
          :class="[
            'flex flex-col max-w-md mx-auto w-full p-4 pt-5',
            {
              'overflow-y-auto': snap === 1,
              'overflow-hidden': snap !== 1
            }
          ]"
        >
          <div class="flex items-center">
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <Drawer.Title class="text-2xl mt-2 font-medium text-gray-900">The Hidden Details</Drawer.Title>
          <p class="text-sm mt-1 text-gray-600 mb-6">40 videos, 20+ exercises</p>
          <p class="text-gray-600">
            The world of user interface design is an intricate landscape filled with hidden details and nuance. In
            this course, you will learn something cool. To the untrained eye, a beautifully designed UI.
          </p>
          <button class="bg-black text-gray-50 mt-8 rounded-md h-[48px] flex-shrink-0 font-medium">
            Buy for $199
          </button>
          <div class="mt-12">
            <h2 class="text-xl font-medium text-gray-900">Module 01. The Details</h2>
            <div class="space-y-4 mt-4">
              <div>
                <span class="block text-gray-900">Layers of UI</span>
                <span class="text-gray-600">A basic introduction to Layers of Design.</span>
              </div>
              <div>
                <span class="block text-gray-900">Typography</span>
                <span class="text-gray-600">The fundamentals of type.</span>
              </div>
              <div>
                <span class="block text-gray-900">UI Animations</span>
                <span class="text-gray-600">Going through the right easings and durations.</span>
              </div>
            </div>
          </div>
          <div class="mt-12">
            <figure>
              <blockquote class="font-serif text-gray-900">
                “I especially loved the hidden details video. That was so useful, learned a lot by just reading it.
                Can&rsquo;t wait for more course content!”
              </blockquote>
              <figcaption>
                <span class="text-sm text-gray-600 mt-2 block">Yvonne Ray, Frontend Developer</span>
              </figcaption>
            </figure>
          </div>
          <div class="mt-12">
            <h2 class="text-xl font-medium text-gray-900">Module 02. The Process</h2>
            <div class="space-y-4 mt-4">
              <div>
                <span class="block text-gray-900">Build</span>
                <span class="text-gray-600">Create cool components to practice.</span>
              </div>
              <div>
                <span class="block text-gray-900">User Insight</span>
                <span class="text-gray-600">Find out what users think and fine-tune.</span>
              </div>
              <div>
                <span class="block text-gray-900">Putting it all together</span>
                <span class="text-gray-600">Let&apos;s build an app together and apply everything.</span>
              </div>
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>
`;

const snapToSequentialPointDrawer = `
<script setup lang=\"ts\">
import { ref } from 'vue'
import { Drawer } from 'vue-vaul'

const snapPoints = ['148px', '355px', 1]

const snap = ref<string | number | null>(snapPoints[0])
<\/script>

<template>
  <Drawer.Root
    :snapPoints
    :activeSnapPoint="snap"
    :setActiveSnapPoint="snapPoint => (snap = snapPoint)"
    :snapToSequentialPoint="true"
  >
    <Drawer.Trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open Drawer
    </Drawer.Trigger>
    <Drawer.Overlay class="fixed inset-0 bg-black/40" />
    <Drawer.Portal>
      <Drawer.Content
        data-testid="content"
        class="fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]"
      >
        <div
          :class="[
            'flex flex-col max-w-md mx-auto w-full p-4 pt-5',
            {
              'overflow-y-auto': snap === 1,
              'overflow-hidden': snap !== 1
            }
          ]"
        >
          <div class="flex items-center">
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <Drawer.Title class="text-2xl mt-2 font-medium text-gray-900">The Hidden Details</Drawer.Title>
          <p class="text-sm mt-1 text-gray-600 mb-6">40 videos, 20+ exercises</p>
          <p class="text-gray-600">
            The world of user interface design is an intricate landscape filled with hidden details and nuance. In
            this course, you will learn something cool. To the untrained eye, a beautifully designed UI.
          </p>
          <button class="bg-black text-gray-50 mt-8 rounded-md h-[48px] flex-shrink-0 font-medium">
            Buy for $199
          </button>
          <div class="mt-12">
            <h2 class="text-xl font-medium text-gray-900">Module 01. The Details</h2>
            <div class="space-y-4 mt-4">
              <div>
                <span class="block text-gray-900">Layers of UI</span>
                <span class="text-gray-600">A basic introduction to Layers of Design.</span>
              </div>
              <div>
                <span class="block text-gray-900">Typography</span>
                <span class="text-gray-600">The fundamentals of type.</span>
              </div>
              <div>
                <span class="block text-gray-900">UI Animations</span>
                <span class="text-gray-600">Going through the right easings and durations.</span>
              </div>
            </div>
          </div>
          <div class="mt-12">
            <figure>
              <blockquote class="font-serif text-gray-900">
                “I especially loved the hidden details video. That was so useful, learned a lot by just reading it.
                Can&rsquo;t wait for more course content!”
              </blockquote>
              <figcaption>
                <span class="text-sm text-gray-600 mt-2 block">Yvonne Ray, Frontend Developer</span>
              </figcaption>
            </figure>
          </div>
          <div class="mt-12">
            <h2 class="text-xl font-medium text-gray-900">Module 02. The Process</h2>
            <div class="space-y-4 mt-4">
              <div>
                <span class="block text-gray-900">Build</span>
                <span class="text-gray-600">Create cool components to practice.</span>
              </div>
              <div>
                <span class="block text-gray-900">User Insight</span>
                <span class="text-gray-600">Find out what users think and fine-tune.</span>
              </div>
              <div>
                <span class="block text-gray-900">Putting it all together</span>
                <span class="text-gray-600">Let&apos;s build an app together and apply everything.</span>
              </div>
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>
`;


const customFadeFromIndexDrawer = `
<script setup lang=\"ts\">
import { ref } from 'vue'
import { Drawer } from 'vue-vaul'

const snapPoints = ['148px', '355px', 1]

const snap = ref<string | number | null>(snapPoints[0])
<\/script>

<template>
  <Drawer.Root
    :snapPoints
    :activeSnapPoint="snap"
    :setActiveSnapPoint="snapPoint => (snap = snapPoint)"
    :fadeFromIndex="1"
  >
    <Drawer.Trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open Drawer
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content
        data-testid="content"
        class="fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]"
      >
        <div
          :class="[
            'flex flex-col max-w-md mx-auto w-full p-4 pt-5',
            {
              'overflow-y-auto': snap === 1,
              'overflow-hidden': snap !== 1
            }
          ]"
        >
          <div class="flex items-center">
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              class="text-yellow-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <Drawer.Title class="text-2xl mt-2 font-medium text-gray-900">The Hidden Details</Drawer.Title>
          <p class="text-sm mt-1 text-gray-600 mb-6">40 videos, 20+ exercises</p>
          <p class="text-gray-600">
            The world of user interface design is an intricate landscape filled with hidden details and nuance. In
            this course, you will learn something cool. To the untrained eye, a beautifully designed UI.
          </p>
          <button class="bg-black text-gray-50 mt-8 rounded-md h-[48px] flex-shrink-0 font-medium">
            Buy for $199
          </button>
          <div class="mt-12">
            <h2 class="text-xl font-medium text-gray-900">Module 01. The Details</h2>
            <div class="space-y-4 mt-4">
              <div>
                <span class="block text-gray-900">Layers of UI</span>
                <span class="text-gray-600">A basic introduction to Layers of Design.</span>
              </div>
              <div>
                <span class="block text-gray-900">Typography</span>
                <span class="text-gray-600">The fundamentals of type.</span>
              </div>
              <div>
                <span class="block text-gray-900">UI Animations</span>
                <span class="text-gray-600">Going through the right easings and durations.</span>
              </div>
            </div>
          </div>
          <div class="mt-12">
            <figure>
              <blockquote class="font-serif text-gray-900">
                “I especially loved the hidden details video. That was so useful, learned a lot by just reading it.
                Can&rsquo;t wait for more course content!”
              </blockquote>
              <figcaption>
                <span class="text-sm text-gray-600 mt-2 block">Yvonne Ray, Frontend Developer</span>
              </figcaption>
            </figure>
          </div>
          <div class="mt-12">
            <h2 class="text-xl font-medium text-gray-900">Module 02. The Process</h2>
            <div class="space-y-4 mt-4">
              <div>
                <span class="block text-gray-900">Build</span>
                <span class="text-gray-600">Create cool components to practice.</span>
              </div>
              <div>
                <span class="block text-gray-900">User Insight</span>
                <span class="text-gray-600">Find out what users think and fine-tune.</span>
              </div>
              <div>
                <span class="block text-gray-900">Putting it all together</span>
                <span class="text-gray-600">Let&apos;s build an app together and apply everything.</span>
              </div>
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>
`;

const nonModalDrawer = `
<script setup lang=\"ts\">
import { ref } from 'vue'
import { Drawer } from 'vue-vaul'
<\/script>

<template>
  <Drawer.Root :modal="false">
    <Drawer.Trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open Drawer
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content class="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none border-t border-gray-200">
        <div class="p-4 bg-white rounded-t-[10px] flex-1">
          <div class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
          <div class="max-w-md mx-auto">
            <Drawer.Title class="font-medium mb-4 text-gray-900">What does non-modal mean?</Drawer.Title>
            <p class="text-gray-600 mb-2">
              The default behavior for the drawer is to restrict interactions to the dialog itself. This means that
              you can&apos;t interact with other content on the page.
            </p>
            <p class="text-gray-600 mb-2">
              But sometimes you want to allow those interactions. Setting \`modal\` to \`false\` will let you scroll the
              page, click on other elements, etc.
            </p>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>
`;

const nonDismissibleDrawer = `
<script setup lang=\"ts\">
import { ref } from 'vue'
import { Drawer } from 'vue-vaul'

const isOpen = ref(false)
<\/script>

<template>
  <Drawer.Root
    :dismissible="false"
    :open="isOpen"
    :onOpenChange="open => (isOpen = open)"
  >
    <Drawer.Trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open Drawer
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content class="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
        <div class="p-4 bg-white rounded-t-[10px] flex-1">
          <div class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
          <div class="max-w-md mx-auto">
            <Drawer.Title class="font-medium mb-4 text-gray-900">A non-dismissible drawer.</Drawer.Title>
            <p class="text-gray-600 mb-2">For cases when your drawer has to be always visible.</p>
            <p class="text-gray-600 mb-2">
              Nothing will close it unless you make it controlled and close it programmatically.
            </p>
            <button
              class="rounded-md mt-4 w-full bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
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
`;


const controlledDrawer = `
<script setup lang=\"ts\">
import { ref } from 'vue'
import { Drawer } from 'vue-vaul'

const open = ref(false)
<\/script>

<template>
  <Drawer.Root
    :open
    :onOpenChange="o => (open = o)"
  >
    <Drawer.Trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open Drawer
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content class="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
        <div class="p-4 bg-white rounded-t-[10px] flex-1">
          <div class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
          <div class="max-w-md mx-auto">
            <Drawer.Title class="font-medium mb-4 text-gray-900">A controlled drawer.</Drawer.Title>
            <p class="text-gray-600 mb-2">
              This means that the drawer no longer manages its own state. Instead, you can control it programmatically
              from the outside.
            </p>
            <p class="text-gray-600 mb-2">
              But you can still let the drawer help you a bit by passing the \`onOpenChange\` prop. This way, the drawer
              will change your open state when the user clicks outside of it, or when they press the escape key for
              example.
            </p>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>
`;


const nestedDrawer = `
<script setup lang=\"ts\">
import { Drawer } from 'vue-vaul'
<\/script>

<template>
  <Drawer.Root>
    <Drawer.Trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open Drawer
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content class="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 lg:h-fit max-h-[96%] fixed bottom-0 left-0 right-0">
        <div class="p-4 bg-white rounded-t-[10px] flex-1">
          <div class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
          <div class="max-w-md mx-auto">
            <Drawer.Title class="font-medium mb-4 text-gray-900">Nested Drawers.</Drawer.Title>
            <p class="text-gray-600 mb-2">
              Nesting drawers creates a
              <a href="https://sonner.emilkowal.ski/" target="_blank" class="underline">
                Sonner-like
              </a>
              stacking effect .
            </p>
            <p class="text-gray-600 mb-2">
              You can nest as many drawers as you want. All you need to do is add a \`Drawer.NestedRoot\` component
              instead of \`Drawer.Root\`.
            </p>
            <Drawer.NestedRoot>
              <Drawer.Trigger class="rounded-md mt-4 w-full bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                Open Second Drawer
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay class="fixed inset-0 bg-black/40" />
                <Drawer.Content class="bg-gray-100 flex flex-col rounded-t-[10px] lg:h-[327px] h-full mt-24 max-h-[94%] fixed bottom-0 left-0 right-0">
                  <div class="p-4 bg-white rounded-t-[10px] flex-1">
                    <div class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
                    <div class="max-w-md mx-auto">
                      <Drawer.Title class="font-medium mb-4 text-gray-900">This drawer is nested.</Drawer.Title>
                      <p class="text-gray-600 mb-2">
                        If you pull this drawer down a bit, it&apos;ll scale the drawer underneath it as well.
                      </p>
                    </div>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.NestedRoot>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>
`;

const sideDrawer = `
<script setup lang=\"ts\">
import { Drawer } from 'vue-vaul'
<\/script>

<template>
  <Drawer.Root direction="right">
    <Drawer.Trigger class="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
      Open Drawer
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content
        class="right-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
        <!-- The gap between the edge of the screen and the drawer is 8px in this case -->
        :style="{
          '--initial-transform': 'calc(100% + 8px)'
        }"
      >
        <div class="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
          <div class="max-w-md mx-auto">
            <Drawer.Title class="font-medium mb-2 text-zinc-900">It supports all directions.</Drawer.Title>
            <Drawer.Description class="text-zinc-600 mb-2">
              This one specifically is not touching the edge of the screen, but that&apos;s not required for a side
              drawer.
            </Drawer.Description>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>
`;
</script>

# Drawer Examples

## Default Drawer

The most basic setup for a drawer.

<CodePreview
  :code="defaultDrawer"
  lang="vue"
>
  <template #preview>
    <DefaultDrawer/>
  </template>
</CodePreview>

## Scrollable Drawer

A scrollable drawer. The behavior here mimics Apple's Sheet component.

<CodePreview
  :code="scrollDrawer"
  lang="vue"
>
  <template #preview>
    <ScrollDrawer/>
  </template>
</CodePreview>

## Snap Drawer

A way to define a set of points that the drawer can snap to during a drag operation. This means that a drawer no longer only has to be open or closed, but can also be partially open.

<CodePreview
  :code="snapDrawer"
  lang="vue"
>
  <template #preview>
    <SnapDrawer/>
  </template>
</CodePreview>

## Snap To Sequential Point

Disable velocity-based snapping by using `snapToSequentialPoint` prop. This means that a snap point won't be skipped even if the velocity is high enough. Useful if each snap point in a drawer is equally important.

<CodePreview
  :code="snapToSequentialPointDrawer"
  lang="vue"
>
  <template #preview>
    <SnapSequentialDrawer/>
  </template>
</CodePreview>

## Custom Fade Index

Use the `fadeFromIndex` prop to specify the snap point index from which the drawer should start fading. It defaults to the last point, but in the demo below we change it to the second point.

<CodePreview
  :code="customFadeFromIndexDrawer"
  lang="vue"
>
  <template #preview>
    <CustomFadeFromIndexDrawer/>
  </template>
</CodePreview>

## Non Modal

Set the `modal` prop to `false` to allow interaction with the background while the drawer is open.

<CodePreview
  :code="nonModalDrawer"
  lang="vue"
>
  <template #preview>
    <NonModalDrawer/>
  </template>
</CodePreview>

## Non Dismissible

Set the `dismissible` prop to `false` to prevent the user from closing the drawer by clicking outside of it, pressing the escape key, or dragging it down.

<CodePreview
  :code="nonDismissibleDrawer"
  lang="vue"
>
  <template #preview>
    <NonDismissibleDrawer/>
  </template>
</CodePreview>

## Controlled Drawer

You can use the open prop to programmatically open or close the drawer. You can also pass the `onOpenChange` prop which will be called when the open state of the dialog changes, it's useful if you want to react to esc/outside clicks when controlled.

<CodePreview
  :code="controlledDrawer"
  lang="vue"
>
  <template #preview>
    <ControlledDrawer/>
  </template>
</CodePreview>

## Nested Drawers

Nest drawers inside each other.

<CodePreview
  :code="nestedDrawer"
  lang="vue"
>
  <template #preview>
    <NestedDrawer/>
  </template>
</CodePreview>

## Side Drawer

Set the direction prop to `right` or `left` to change the position of the drawer. Use the `--initial-transform` CSS variable to adjust the animation, useful when the drawer does not touch the edge of the screen (like in this case).

<CodePreview
  :code="sideDrawer"
  lang="vue"
>
  <template #preview>
    <SideDrawer/>
  </template>
</CodePreview>