import cn from 'classnames'
import ICON_PACK_COMMON from '@/assets/icons/iconsCommon'
import styles from './IconStyles.module.css'

export const ICON_STATE_PRIMARY = 'primary'
export const ICON_STATE_SECONDARY = 'secondary'
export const ICON_STATE_HOVERED = 'hovered'
export const ICON_SIZE_BLOCK = 'block'
export const ICON_SIZE_XS = 'ms'
export const ICON_SIZE_SM = 'sm'
export const ICON_SIZE_MD = 'md'

export type TIconSize =
  | typeof ICON_SIZE_BLOCK
  | typeof ICON_SIZE_XS
  | typeof ICON_SIZE_SM
  | typeof ICON_SIZE_MD
export type TIconState =
  | typeof ICON_STATE_PRIMARY
  | typeof ICON_STATE_SECONDARY
  | typeof ICON_STATE_HOVERED
type TIconElementProps = {
  name: string
  size?: TIconSize
  state?: TIconState
  className?: string
}

const IconElement = ({
  name,
  size = ICON_SIZE_MD,
  state = ICON_STATE_PRIMARY,
  className,
}: TIconElementProps) => {
  const icon = ICON_PACK_COMMON[name]
  const classes = [styles.icon, styles[size], styles[state], className]

  if (!icon) {
    console.error(`can't find icon with name ${name}`)
  }

  if (!icon) return <svg className={className} />

  return (
    <svg viewBox={icon.viewBox} className={cn(classes)}>
      {icon.icon}
    </svg>
  )
}

export default IconElement
