import { AnimatePresence, motion, HTMLMotionProps } from 'framer-motion'

interface FadeInOutProps extends HTMLMotionProps<'div'> {
  isVisible: boolean
  duration?: number
  ease?: string | number[]
}

const FadeInOut = ({
  isVisible,
  duration = 0.2,
  ease = 'easeInOut',
  children,
  ...motionProps
}: FadeInOutProps) => (
  <AnimatePresence initial={false}>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration, ease }}
        {...motionProps}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
)

export default FadeInOut
