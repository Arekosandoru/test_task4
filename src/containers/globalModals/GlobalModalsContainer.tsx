import { isOpenModal } from '@/app/selectors/systemSelectors.ts'
import useAppSelector from '@/hooks/state/useAppSelector.ts'
import { ADD_MENU_ITEM_MODAL_NAME } from '@/constants/modalNameConstants.ts'
import AddMenuItemModalContainer from '@/containers/modals/AddMenuItemModalContainer.tsx'

const GlobalModalsContainer = () => {
  const isAddMenuItemModalOpen = useAppSelector((state) =>
    isOpenModal(state, ADD_MENU_ITEM_MODAL_NAME)
  )

  return <>{isAddMenuItemModalOpen && <AddMenuItemModalContainer />}</>
}

export default GlobalModalsContainer
