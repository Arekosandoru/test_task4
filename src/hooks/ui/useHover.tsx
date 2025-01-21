import { MutableRefObject, useEffect, useState } from 'react'

export function useHover(target: MutableRefObject<HTMLElement | null>, isHoverDisabled = false) {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const el = target.current

    if (!el || isHoverDisabled) return

    const onMouseEnter = () => setIsHovered(true)
    const onMouseLeave = () => setIsHovered(false)

    el.addEventListener('mouseenter', onMouseEnter)
    el.addEventListener('mouseleave', onMouseLeave)

    return () => {
      el.removeEventListener('mouseenter', onMouseEnter)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [target, isHoverDisabled])

  if (isHoverDisabled) return false

  return isHovered
}
