import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleAside } from '@/app/slices/asideSlice.ts'
import useAppSelector from '@/hooks/useAppSelector.ts'
import AsideLayout from '@/layout/asideLayout/AsideLayout.tsx'
import MenuHeaderContainer from '@/containers/aside/menuHeader/MenuHeaderContainer.tsx'
// Производительность в production-сборке уже оптимальна, и данная оптимизация может быть избыточной.
// Пока используем синхронный контейнер
// import MenuListContainer from '@/containers/aside/menuList/AsyncMenuListContainer.tsx'
import MenuListContainer from '@/containers/aside/menuList/MenuListContainer.tsx'

const AsideContainer = () => {
  const dispatch = useDispatch()
  const { isExpanded } = useAppSelector((state) => state.aside)

  const onCollapsedAsideClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.stopPropagation()

    if (!isExpanded) {
      dispatch(toggleAside())
    }
  }

  return (
    <AsideLayout isAsideExpanded={isExpanded} onClick={onCollapsedAsideClick}>
      <MenuHeaderContainer />
      <MenuListContainer />
    </AsideLayout>
  )
}

export default AsideContainer
