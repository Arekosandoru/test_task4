import { memo, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { getCollapseMenuListAnimationParams } from '@/utils/styleHelpers.ts'
import { TMenuItem, toggleExpand } from '@/app/slices/asideMenuSlice.ts'
import {
  getLeftIconName,
  getRightIconName,
  isMenuItemWithBottomGap,
} from '@/utils/asideMenuHelpers.ts'
import { useHover } from '@/hooks/ui/useHover.tsx'
import { MenuButtonComponent } from '@/components/aside'
import styles from './MenuItemStyles.module.css'

const arePropsEqual = (prevProps: TMenuItemComponent, nextProps: TMenuItemComponent) => {
  return (
    prevProps.id === nextProps.id &&
    prevProps.label === nextProps.label &&
    prevProps.isExpanded === nextProps.isExpanded &&
    prevProps.level === nextProps.level &&
    prevProps.icon === nextProps.icon &&
    prevProps.isAsideExpanded === nextProps.isAsideExpanded &&
    prevProps.canHaveChildren === nextProps.canHaveChildren &&
    JSON.stringify(prevProps.children) === JSON.stringify(nextProps.children)
  )
}

type TMenuItemComponent = TMenuItem & {
  level?: number
  isAsideExpanded: boolean
}

const MenuItemComponent = memo(
  ({
    id,
    label,
    isExpanded,
    level = 0,
    icon,
    children,
    isAsideExpanded,
    canHaveChildren,
  }: TMenuItemComponent) => {
    const dispatch = useDispatch()
    const ref = useRef<HTMLDivElement | null>(null)
    const isHovered = useHover(ref, !isAsideExpanded)
    const childrenNodes = children || []
    const hasChildren = childrenNodes.length > 0
    const leftIconName = getLeftIconName(level, isExpanded, hasChildren) || icon
    const rightIconName = getRightIconName(level, isExpanded, hasChildren)

    const handleToggle = useCallback(() => {
      dispatch(toggleExpand(id))
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
                isAsideExpanded={isAsideExpanded}
              />
            ))}
          </motion.div>
        )}
      </div>
    )
  },
  arePropsEqual
)

export default MenuItemComponent
