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