import { TMenuItem } from '@/app/slices/asideMenuSlice.ts'

const DOCUMENT_NAME_LENGTH_MIN = 2
const DOCUMENT_NAME_LENGTH_MAX = 30
const ERROR_MESSAGES = {
  tooShort: `Document name must not be less than ${DOCUMENT_NAME_LENGTH_MIN} characters.`,
  tooLong: `Document name must not exceed ${DOCUMENT_NAME_LENGTH_MAX} characters.`,
  duplicate: 'A document with this name already exists.',
}

export const validateDocumentName = (
  value: string,
  menuItems: TMenuItem[],
  isSubmit = false
): string | null => {
  if (value.length < DOCUMENT_NAME_LENGTH_MIN && isSubmit) {
    return ERROR_MESSAGES.tooShort
  }

  if (value.length > DOCUMENT_NAME_LENGTH_MAX) {
    return ERROR_MESSAGES.tooLong
  }

  const duplicate = menuItems.some((item) => item.label.toLowerCase() === value.toLowerCase())

  if (duplicate) {
    return ERROR_MESSAGES.duplicate
  }

  return null
}
