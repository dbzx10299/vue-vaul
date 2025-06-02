
import {
  DialogDescription,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from 'reka-ui'

import Root from './components/Root.vue'
import NestedRoot from './components/NestedRoot.vue'
import Content from './components/Content.vue'
import Overlay from './components/Overlay.vue'
import Portal from './components/Portal.vue'
import Handle from './components/Handle.vue'

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
};