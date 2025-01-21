import { TMenuItem } from '@/app/slices/asideMenuSlice.ts'
import { ICON_CHEVRON_BOTTOM, ICON_CHEVRON_RIGHT, ICON_CHEVRON_TOP } from '@/constants/iconNames.ts'

// Не ясна логика разделения пунктов меню на группы, поэтому пока такой костыль просто для визуального соответствия
const MENU_ITEMS_IDS_WITH_GAP = ['2', '5']

export const getLeftIconName = (
  level: number = 0,
  isExpanded: boolean,
  children?: TMenuItem[]
): string | undefined => {
  const hasChildren = children && children.length > 0

  if (hasChildren && level > 0) {
    return isExpanded ? ICON_CHEVRON_BOTTOM : ICON_CHEVRON_RIGHT
  }

  return undefined
}

export const getRightIconName = (
  level: number = 0,
  isExpanded: boolean,
  children?: TMenuItem[]
): string | undefined => {
  const hasChildren = children && children.length > 0

  if (hasChildren && level < 1) {
    return isExpanded ? ICON_CHEVRON_TOP : ICON_CHEVRON_BOTTOM
  }

  return undefined
}

export const isMenuItemWithBottomGap = (id: string) => MENU_ITEMS_IDS_WITH_GAP.includes(id)
