import { memo, useCallback, useRef } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { getCollapseMenuListAnimationParams } from '@/utils/styleHelpers.ts'
import { TMenuItem } from '@/app/slices/asideMenuSlice.ts'
import {
  getLeftIconName,
  getRightIconName,
  isMenuItemWithBottomGap,
} from '@/utils/asideMenuHelpers.ts'
import { useHover } from '@/hooks/ui/useHover.tsx'
import { MenuButtonComponent } from '@/components/aside'
import styles from './MenuItemStyles.module.css'

type TMenuItemComponent = TMenuItem & {
  level?: number
  onToggle?: (id: string) => void
  isAsideExpanded: boolean
}

const MenuItemComponent = memo(
  ({
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
    const childrenNodes = children || []
    const hasChildren = childrenNodes.length > 0
    const leftIconName = getLeftIconName(level, isExpanded, hasChildren) || icon
    const rightIconName = getRightIconName(level, isExpanded, hasChildren)

    const handleToggle = useCallback(() => {
      if (typeof onToggle === 'function') {
        onToggle(id)
      }
    }, [id])

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
        {hasChildren && (
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
)

export default MenuItemComponent
