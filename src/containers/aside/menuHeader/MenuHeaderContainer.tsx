import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleAside } from '@/app/slices/asideSlice.ts'
import useAppSelector from '@/hooks/state/useAppSelector.ts'
import { MenuHeaderComponent } from '@/components/aside'

const MenuHeaderContainer = () => {
  const dispatch = useDispatch()
  const { isExpanded } = useAppSelector((state) => state.aside)

  const handleCollapse = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation()

    dispatch(toggleAside())
  }

  return <MenuHeaderComponent onToggleAside={handleCollapse} isAsideExpanded={isExpanded} />
}

export default MenuHeaderContainer
