import React from 'react'
import ButtonElement, {
  BUTTON_SIZE_LG,
  BUTTON_STATE_SECONDARY,
} from '@/components/shared/buttonElement/ButtonElement.tsx'
import styles from './AddMenuItemModalStyles.module.css'

type TAddMenuItemModalProps = {
  onClose: () => void
  onAction: () => void
  onInputChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  inputValue: string
  error?: string | null
  isActionDisabled?: boolean
}

const AddMenuItemModalComponent = ({
  onClose,
  onAction,
  onInputChange,
  inputValue,
  error,
  isActionDisabled,
}: TAddMenuItemModalProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <label htmlFor="documentName">
          Add document name: <small>(2-30 characters)</small>
        </label>
        <input
          type="text"
          id="documentName"
          placeholder="Enter document name"
          onChange={onInputChange}
          value={inputValue}
        />
        <p className={styles.errorMessage}>{error && error}</p>
      </div>
      <div className={styles.footer}>
        <ButtonElement onClick={onClose} size={BUTTON_SIZE_LG} state={BUTTON_STATE_SECONDARY}>
          Cancel
        </ButtonElement>
        <ButtonElement onClick={onAction} size={BUTTON_SIZE_LG} disabled={isActionDisabled}>
          Add document
        </ButtonElement>
      </div>
    </div>
  )
}

export default AddMenuItemModalComponent
