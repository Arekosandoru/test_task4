import { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import ButtonElement, { BUTTON_SIZE_LG } from '@/components/shared/buttonElement/ButtonElement.tsx'
import { ICON_CLOSE } from '@/constants/iconNames.ts'
import styles from './ModalStyles.module.css'

export type TModalProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

const ModalComponent = ({ isOpen, onClose, title, children }: TModalProps) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <ButtonElement
          className={styles.closeButton}
          onClick={onClose}
          size={BUTTON_SIZE_LG}
          leftIconName={ICON_CLOSE}
        />
        {title && (
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
          </div>
        )}
        {children}
      </div>
    </div>,
    document.getElementById('root') as HTMLElement
  )
}

export default ModalComponent
