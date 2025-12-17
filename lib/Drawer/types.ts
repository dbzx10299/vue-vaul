import type { Ref, ComponentPublicInstance, InjectionKey } from 'vue'

export type DrawerDirection = 'top' | 'bottom' | 'left' | 'right';

export interface SnapPoint {
  fraction: number;
  height: number;
}

export type AnyFunction = (...args: any) => any;

export interface DrawerContext {
  drawerRef: Ref<ComponentPublicInstance | null>;
  overlayRef: Ref<ComponentPublicInstance | null>;
  onPress: (event: PointerEvent) => void;
  onRelease: (event: PointerEvent | null) => void;
  onDrag: (event: PointerEvent) => void;
  onNestedDrag: (event: PointerEvent, percentageDragged: number) => void;
  onNestedOpenChange: (o: boolean) => void;
  onNestedRelease: (event: PointerEvent, open: boolean) => void;
  dismissible: boolean;
  isOpen: Ref<boolean>;
  isDragging: Ref<boolean>;
  keyboardIsOpen: Ref<boolean>;
  snapPointsOffset: Ref<number[] | null>;
  snapPoints?: (number | string)[] | null;
  activeSnapPointIndex?: Ref<number | null>;
  modal: boolean;
  shouldFade: Ref<boolean>;
  activeSnapPoint?: Ref<number | string | null>;
  closeDrawer: () => void;
  openProp?: boolean;
  onOpenChange?: (o: boolean) => void;
  direction: DrawerDirection;
  handleOnly?: boolean;
  autoFocus?: boolean;
  shouldAnimate?: Ref<boolean>;
}

export const DrawerContextKey = Symbol() as InjectionKey<DrawerContext>