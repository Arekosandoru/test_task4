import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeModalById } from '@/app/slices/systemSlice.ts'
import { addMenuItem, toggleExpand } from '@/app/slices/asideMenuSlice.ts'
import { selectModalPayload } from '@/app/selectors/systemSelectors.ts'
import useAppSelector from '@/hooks/useAppSelector.ts'
import useDebounce from '@/hooks/useDebounce'
import { validateDocumentName } from '@/utils/validation.ts'
import { ADD_MENU_ITEM_MODAL_NAME } from '@/constants/modalNameConstants.ts'
import LazyModal from '@/components/modal/LazyModal.tsx'
import AddMenuItemModalComponent from '@/components/modal/addMenuItem/AddMenuItemModalComponent.tsx'

const AddMenuItemModalContainer = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState<string | null>(null)
  const menuItems = useAppSelector((state) => state.menu.items)
  const { parentId } = useAppSelector((state) =>
    selectModalPayload(state, ADD_MENU_ITEM_MODAL_NAME)
  )

  const validateInput = (value: string, isSubmit?: boolean) =>
    validateDocumentName(value, menuItems, isSubmit)

  const onClose = () => {
    dispatch(closeModalById(ADD_MENU_ITEM_MODAL_NAME))
  }

  const onClick = () => {
    const validationError = validateInput(inputValue, true)

    if (validationError) {
      setError(validationError)
      return
    }

    if (parentId && typeof parentId === 'string') {
      dispatch(addMenuItem({ parentId, label: inputValue }))
      dispatch(toggleExpand(parentId))
      onClose()
    }
  }

  const checkError = useDebounce((value: string) => {
    setError(validateInput(value))
  }, 300)

  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target

    setInputValue(value)
    checkError(value)
  }

  if (!parentId) return null

  return (
    <LazyModal isOpen onClose={onClose}>
      <AddMenuItemModalComponent
        onAction={onClick}
        onClose={onClose}
        onInputChange={onInputChange}
        inputValue={inputValue}
        error={error}
        isActionDisabled={!inputValue || !!error}
      />
    </LazyModal>
  )
}

export default AddMenuItemModalContainer
