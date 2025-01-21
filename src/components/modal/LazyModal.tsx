import { lazy, Suspense } from 'react'
import type { TModalProps } from '@/components/modal/Modal.tsx'

const ModalComponent = lazy(() => import('./Modal'))

const LazyModal = ({ children, ...props }: TModalProps) => (
  <Suspense fallback={<></>}>
    <ModalComponent {...props}>{children}</ModalComponent>
  </Suspense>
)

export default LazyModal
