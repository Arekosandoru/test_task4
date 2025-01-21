import React, { PropsWithChildren, useRef } from 'react'
import type { JSX } from 'react'
import cn from 'classnames'
import { useHover } from '@/hooks/useHover.tsx'
import IconElement, {
  ICON_SIZE_BLOCK,
  ICON_STATE_HOVERED,
  TIconSize,
  TIconState,
} from '../iconElement/IconElement.tsx'
import styles from './ButtonStyles.module.css'

export const BUTTON_STATE_PRIMARY = 'primary'
export const BUTTON_STATE_SECONDARY = 'secondary'
export const BUTTON_SIZE_SM = 'sm'
export const BUTTON_SIZE_MD = 'md'
export const BUTTON_SIZE_LG = 'lg'

type TButtonSize = typeof BUTTON_SIZE_SM | typeof BUTTON_SIZE_MD | typeof BUTTON_SIZE_LG
type TButtonState = typeof BUTTON_STATE_PRIMARY | typeof BUTTON_STATE_SECONDARY
type TButtonElementProps<T extends React.ElementType = 'button'> = {
  as?: T
  size?: TButtonSize
  state?: TButtonState
  leftIconName?: string
  leftIconState?: TIconState
  leftIconSize?: TIconSize
  rightIconName?: string
  rightIconState?: TIconState
  rightIconSize?: TIconSize
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  isHoverDisabled?: boolean
  renderRight?: () => JSX.Element | null
  disabled?: boolean
  ariaLabel?: string
} & PropsWithChildren

const ButtonElement = <T extends React.ElementType = 'button'>({
  as,
  children,
  size = BUTTON_SIZE_MD,
  state = BUTTON_STATE_PRIMARY,
  leftIconName,
  leftIconState,
  leftIconSize = ICON_SIZE_BLOCK,
  rightIconName,
  rightIconState,
  rightIconSize = ICON_SIZE_BLOCK,
  onClick,
  className,
  isHoverDisabled,
  renderRight = () => null,
  disabled = false,
  ariaLabel,
}: TButtonElementProps<T>) => {
  const Tag = as || 'button'
  const ref = useRef<HTMLButtonElement | null>(null)
  const isHovered = useHover(ref, isHoverDisabled)
  const classes = [styles.button, styles[size], styles[state], className]

  return (
    <Tag
      onClick={onClick}
      className={cn(classes)}
      ref={ref}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {leftIconName && (
        <IconElement
          name={leftIconName}
          size={leftIconSize}
          state={isHovered ? ICON_STATE_HOVERED : leftIconState}
        />
      )}
      {children}
      {rightIconName && (
        <IconElement
          name={rightIconName}
          size={rightIconSize}
          state={isHovered ? ICON_STATE_HOVERED : rightIconState}
        />
      )}
      {renderRight && renderRight()}
    </Tag>
  )
}

export default ButtonElement
