import React from 'react'
import { useDispatch } from 'react-redux'
import { ICON_DOTS_HORIZONTAL, ICON_PLUS } from '@/constants/iconNames.ts'
import { openModalById } from '@/app/slices/systemSlice.ts'
import { ADD_MENU_ITEM_MODAL_NAME } from '@/constants/modalNameConstants.ts'
import { MenuItemControlsPanelComponent } from '@/components/aside'

type TControlsPanelProps = {
  id?: string
}

const ControlsPanelContainer = ({ id }: TControlsPanelProps) => {
  const dispatch = useDispatch()
  const onLeftControlClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation()

    if (id) {
      dispatch(
        openModalById({
          id: ADD_MENU_ITEM_MODAL_NAME,
          payload: { parentId: id },
        })
      )
    }
  }
  const onRightControlClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation()
  }

  return (
    <MenuItemControlsPanelComponent
      leftControlIcon={ICON_PLUS}
      rightControlIcon={ICON_DOTS_HORIZONTAL}
      onLeftControlClick={onLeftControlClick}
      onRightControlClick={onRightControlClick}
    />
  )
}

export default ControlsPanelContainer
