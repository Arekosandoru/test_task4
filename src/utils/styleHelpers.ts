import { TRANSITION_SPRING } from '@/constants/animationParams.ts'

export const getCollapseMenuListAnimationParams = (isExpanded: boolean) => ({
  initial: false,
  animate: {
    height: isExpanded ? `auto` : `12px`,
    marginBottom: isExpanded ? `0` : `-12px`,
    opacity: isExpanded ? 1 : 0,
  },
  transition: TRANSITION_SPRING,
})
