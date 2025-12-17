import {
  DialogClose,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'

import Content from './components/Content.vue'
import Handle from './components/Handle.vue'
import NestedRoot from './components/NestedRoot.vue'
import Overlay from './components/Overlay.vue'
import Portal from './components/Portal.vue'
import Root from './components/Root.vue'

interface DrawerNamespace {
  Root: typeof Root
  NestedRoot: typeof NestedRoot
  Content: typeof Content
  Overlay: typeof Overlay
  Trigger: typeof DialogTrigger
  Portal: typeof Portal
  Handle: typeof Handle
  Close: typeof DialogClose
  Title: typeof DialogTitle
  Description: typeof DialogDescription
}

export const Drawer: DrawerNamespace = {
  Root,
  NestedRoot,
  Content,
  Overlay,
  Trigger: DialogTrigger,
  Portal,
  Handle,
  Close: DialogClose,
  Title: DialogTitle,
  Description: DialogDescription,
}
