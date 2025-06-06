# Getting Started

Vue Vaul is a port of [Vaul](https://github.com/emilkowalski/vaul) which was originally written in React. Vue Vaul aims to have a great DX and provides a similar API that the React version uses.

## Installation

```sh
npm i vue-vaul
```

## Usage with Tailwind CSS

Vaul is an unstyled drawer component, the examples shown in these docs have styles applied using the `@tailwindcss/vite` Vite plugin, but the drawer can be styled with regular CSS.

Make sure to read the docs for [setting up Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite).

## Create a Drawer component

```vue
<script setup>
import { Drawer } from 'vue-vaul'
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