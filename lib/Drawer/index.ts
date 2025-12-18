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

export const Drawer = {
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
