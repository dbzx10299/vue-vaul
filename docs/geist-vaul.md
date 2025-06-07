<script setup>
import CodePreview from './.vitepress/components/CodePreview.vue'
import DefaultDrawer from './.vitepress/components/Drawer/DefaultDrawer.vue'
import ScrollDrawer from './.vitepress/components/Drawer/ScrollDrawer.vue'

const defaultDrawer = `
<script setup lang=\"ts\">
import { Drawer } from 'geist-vaul'
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
import { Drawer } from 'geist-vaul'
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
</script>

# Geist Vaul

Geist Vaul is the same drawer as Vue Vaul but more lightweight and with less options.  Compared with Vue Vaul, Geist Vaul does not have the option to nest drawers, does not support snap points, and does not support different directions.

## Installation

```sh
npm i geist-vaul
```

## Create a Drawer component

```vue
<script setup>
import { Drawer } from 'geist-vaul'
</script>

<template>
  <Drawer.Root>
    <Drawer.Trigger>Open Drawer</Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay class="fixed inset-0 bg-black/40" />
      <Drawer.Content class="bg-gray-100 h-fit fixed bottom-0 left-0 right-0 outline-none">
        <div class="p-4 bg-white"><!-- content --></div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</template>
```

## API

```ts
type DialogProps = {
  open?: boolean;
  /**
   * Number between 0 and 1 that determines when the drawer should be closed.
   * Example: threshold of 0.5 would close the drawer if the user swiped for 50% of the height of the drawer or more.
   * @default 0.25
   */
  closeThreshold?: number;
  onOpenChange?: (open: boolean) => void;
  /**
   * Duration for which the drawer is not draggable after scrolling content inside of the drawer.
   * @default 500ms
   */
  scrollLockTimeout?: number;
  /**
   * When `true` only allows the drawer to be dragged by the `<Drawer.Handle />` component.
   * @default false
   */
  handleOnly?: boolean;
  /**
   * When `false` dragging, clicking outside, pressing esc, etc. will not close the drawer.
   * Use this in comination with the `open` prop, otherwise you won't be able to open/close the drawer.
   * @default true
   */
  dismissible?: boolean;
  onDrag?: (event: PointerEvent, percentageDragged: number) => void;
  onRelease?: (event: PointerEvent, open: boolean) => void;
  /**
   * When `false` it allows to interact with elements outside of the drawer without closing it.
   * @default true
   */
  modal?: boolean;
  onClose?: () => void;
  /**
   * Opened by default, skips initial enter animation. Still reacts to `open` state changes
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * Gets triggered after the open or close animation ends, it receives an `open` argument with the `open` state of the drawer by the time the function was triggered.
   * Useful to revert any state changes for example.
   */
  onAnimationEnd?: (open: boolean) => void;
  autoFocus?: boolean;
}
```

## Examples

### Default Drawer

The most basic setup for a drawer.

<CodePreview
  :code="defaultDrawer"
  lang="vue"
>
  <template #preview>
    <DefaultDrawer/>
  </template>
</CodePreview>

### Scrollable Drawer

A scrollable drawer. The behavior here mimics Apple's Sheet component.

<CodePreview
  :code="scrollDrawer"
  lang="vue"
>
  <template #preview>
    <ScrollDrawer/>
  </template>
</CodePreview>