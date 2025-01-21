import React, { PropsWithChildren } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { TRANSITION_SPRING } from '@/constants/animationParams.ts'
import styles from './AsideLayoutStyles.module.css'

type TAsideLayoutProps = {
  isAsideExpanded: boolean
  onClick: (ev: React.MouseEvent<HTMLDivElement>) => void
} & PropsWithChildren

const WIDTH_COLLAPSED = 72
const WIDTH_EXPANDED = 240

const AsideLayout = ({ isAsideExpanded, onClick, children }: TAsideLayoutProps) => (
  <motion.aside
    className={cn(styles.aside, {
      [styles.collapsed]: !isAsideExpanded,
    })}
    initial={false}
    animate={{
      width: isAsideExpanded ? `${WIDTH_EXPANDED}px` : `${WIDTH_COLLAPSED}px`,
    }}
    transition={TRANSITION_SPRING}
    onClick={onClick}
  >
    {children}
  </motion.aside>
)

export default AsideLayout
