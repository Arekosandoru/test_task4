import { useRef, useCallback } from 'react'

const useDebounced = <T extends unknown[]>(func: (...args: T) => void, delay: number) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  return useCallback(
    (...args: T) => {
      if (timer.current) clearTimeout(timer.current)

      timer.current = setTimeout(() => {
        func(...args)
      }, delay)
    },
    [func, delay]
  )
}

export default useDebounced
