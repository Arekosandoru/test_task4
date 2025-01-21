import { useRef } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { getCollapseMenuListAnimationParams } from '@/utils/styleHelpers.ts'
import { TMenuItem } from '@/app/slices/asideMenuSlice.ts'
import {
  getLeftIconName,
  getRightIconName,
  isMenuItemWithBottomGap,
} from '@/utils/asideMenuHelpers.ts'
import { useHover } from '@/hooks/useHover.tsx'
import { MenuButtonComponent } from '@/components/aside'
import styles from './MenuItemStyles.module.css'

type TMenuItemComponent = TMenuItem & {
  level?: number
  onToggle?: (id: string) => void
  isAsideExpanded: boolean
}

const MenuItemComponent = ({
  id,
  label,
  isExpanded,
  level = 0,
  onToggle,
  icon,
  children,
  isAsideExpanded,
  canHaveChildren,
}: TMenuItemComponent) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isHovered = useHover(ref, !isAsideExpanded)
  const leftIconName = getLeftIconName(level, isExpanded, children) || icon
  const rightIconName = getRightIconName(level, isExpanded, children)
  const childrenNodes = children || []

  const handleToggle = () => {
    if (typeof onToggle === 'function') {
      onToggle(id)
    }
  }

  if (!isAsideExpanded) {
    return (
      <MenuButtonComponent leftIconName={leftIconName} onClick={handleToggle} isHoverDisabled />
    )
  }

  return (
    <div
      className={cn(styles.container, {
        [styles.bottomGap]: isMenuItemWithBottomGap(id),
        [styles.leftPadding]: level > 0,
      })}
    >
      <div className={styles.elementWrapper} ref={ref}>
        <MenuButtonComponent
          id={id}
          leftIconName={leftIconName}
          rightIconName={rightIconName}
          onClick={handleToggle}
          label={label}
          isHovered={isHovered}
          isExpanded={isExpanded}
          canHaveChildren={canHaveChildren}
        />
      </div>
      {childrenNodes.length > 0 && (
        <motion.div {...getCollapseMenuListAnimationParams(isExpanded)}>
          {childrenNodes.map((child) => (
            <MenuItemComponent
              {...child}
              key={child.id}
              level={level + 1}
              onToggle={onToggle}
              isAsideExpanded={isAsideExpanded}
            />
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default MenuItemComponent
