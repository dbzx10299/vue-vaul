# Vue Vaul

A Vue drawer component ported from [Vaul](https://github.com/emilkowalski/vaul).

For a lightweight version with minimal options, see [Geist Vaul](https://www.npmjs.com/package/geist-vaul).

## Install

```bash
npm i vue-vaul
```

## Usage

```vue
<script setup>
import { Drawer } from 'vue-vaul'
</script>

<template>
  <Drawer.Root>
    <Drawer.Trigger>Open</Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Content>
        <Drawer.Title>Title</Drawer.Title>
      </Drawer.Content>
      <Drawer.Overlay />
    </Drawer.Portal>
  </Drawer.Root>
</template>
```

## Credits

This project also partially contains code derived or copied from the following projects:

- [Vaul](https://github.com/emilkowalski/vaul)

- [Reka UI dialog](https://reka-ui.com/docs/components/dialog)

## Licenses

This project is licensed under the [MIT License](LICENSE).