import React from 'react'
import ButtonElement from '@/components/shared/buttonElement/ButtonElement.tsx'
import styles from './MenuItemControlsPanelStyles.module.css'

type TControlsPanelProps = {
  leftControlIcon?: string
  rightControlIcon?: string
  onRightControlClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void
  onLeftControlClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

const ControlsPanelComponent = ({
  leftControlIcon,
  rightControlIcon,
  onLeftControlClick,
  onRightControlClick,
}: TControlsPanelProps) => {
  return (
    <div className={styles.controlPanel}>
      <ButtonElement leftIconName={leftControlIcon} onClick={onLeftControlClick} />
      <ButtonElement leftIconName={rightControlIcon} onClick={onRightControlClick} />
    </div>
  )
}

export default ControlsPanelComponent
