import cn from 'classnames'
import ControlsPanelContainer from '@/containers/aside/menuItemControlsPanel/MenuItemControlsPanelContainer.tsx'
import ButtonElement, { BUTTON_SIZE_LG } from '@/components/shared/buttonElement/ButtonElement.tsx'
import {
  ICON_SIZE_SM,
  ICON_STATE_PRIMARY,
  ICON_STATE_SECONDARY,
} from '@/components/shared/iconElement/IconElement.tsx'
import styles from './MenuButtonStyles.module.css'

type TMenuButtonProps = {
  id?: string
  label?: string
  onClick: () => void
  leftIconName?: string
  rightIconName?: string
  isHovered?: boolean
  isExpanded?: boolean
  isHoverDisabled?: boolean
  canHaveChildren?: boolean
}

const MenuButtonComponent = ({
  id,
  label,
  onClick,
  leftIconName,
  rightIconName,
  isHovered,
  isExpanded,
  isHoverDisabled = false,
  canHaveChildren = false,
}: TMenuButtonProps) => {
  const renderRight = () => {
    if (isHoverDisabled || !canHaveChildren || !isHovered) return null

    return <ControlsPanelContainer id={id} />
  }
  const iconState = isExpanded ? ICON_STATE_PRIMARY : ICON_STATE_SECONDARY

  return (
    <ButtonElement
      as="div"
      leftIconName={leftIconName}
      leftIconSize={ICON_SIZE_SM}
      leftIconState={iconState}
      rightIconName={rightIconName}
      rightIconSize={ICON_SIZE_SM}
      rightIconState={iconState}
      onClick={onClick}
      className={styles.button}
      size={BUTTON_SIZE_LG}
      isHoverDisabled={isHoverDisabled}
      renderRight={renderRight}
    >
      <span
        className={cn(styles.text, {
          [styles.textExpanded]: isExpanded,
        })}
      >
        {label}
      </span>
    </ButtonElement>
  )
}

export default MenuButtonComponent
