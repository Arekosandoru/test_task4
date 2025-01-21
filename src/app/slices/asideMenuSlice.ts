import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  ICON_BELL,
  ICON_CUBE,
  ICON_DASHBOARD,
  ICON_DOCUMENT,
  ICON_DOCUMENT_EMPTY,
  ICON_FOLDER,
  ICON_HOME,
  ICON_PROJECT,
  ICON_STAR,
} from '@/constants/iconNames.ts'

export type TMenuItem = {
  id: string
  label: string
  parentId: string | null
  isExpanded: boolean
  children?: TMenuItem[]
  icon?: string
  canHaveChildren?: boolean
}

export type TMenuState = {
  items: TMenuItem[]
}

const initialState: TMenuState = {
  items: [
    { id: '1', label: 'Home', parentId: null, isExpanded: false, icon: ICON_HOME },
    { id: '2', label: 'Favorites', parentId: null, isExpanded: false, icon: ICON_STAR },
    { id: '3', label: 'Projects', parentId: null, isExpanded: false, icon: ICON_PROJECT },
    { id: '4', label: 'Dashboards', parentId: null, isExpanded: false, icon: ICON_DASHBOARD },
    {
      id: '5',
      label: 'Space docs',
      parentId: null,
      isExpanded: false,
      icon: ICON_FOLDER,
      canHaveChildren: true,
    },
    {
      id: '6',
      label: '👨‍💻 Business Logic',
      parentId: '5',
      isExpanded: false,
      icon: ICON_DOCUMENT_EMPTY,
      canHaveChildren: true,
    },
    {
      id: '7',
      label: 'Onboarding',
      parentId: '6',
      isExpanded: false,
      icon: ICON_DOCUMENT_EMPTY,
      canHaveChildren: true,
    },
    {
      id: '8',
      label: 'Limits and Pricing',
      parentId: '6',
      isExpanded: false,
      icon: ICON_DOCUMENT,
      canHaveChildren: true,
    },
    {
      id: '9',
      label: 'OAuth',
      parentId: '6',
      isExpanded: false,
      icon: ICON_DOCUMENT,
      canHaveChildren: true,
    },
    {
      id: '10',
      label: 'Access Groups, Roles',
      parentId: '6',
      isExpanded: false,
      icon: ICON_DOCUMENT,
      canHaveChildren: true,
    },
    {
      id: '11',
      label: 'Референсы и ориентиры',
      parentId: '6',
      isExpanded: false,
      icon: ICON_DOCUMENT,
    },
    {
      id: '12',
      label: 'Dashboard',
      parentId: '6',
      isExpanded: false,
      icon: ICON_DOCUMENT,
      canHaveChildren: true,
    },
    {
      id: '13',
      label: 'Follow',
      parentId: '6',
      isExpanded: false,
      icon: ICON_DOCUMENT,
      canHaveChildren: true,
    },
    {
      id: '14',
      label: 'Backend',
      parentId: '5',
      isExpanded: false,
      icon: ICON_DOCUMENT,
      canHaveChildren: true,
    },
    {
      id: '15',
      label: 'DevOps',
      parentId: '5',
      isExpanded: false,
      icon: ICON_DOCUMENT_EMPTY,
      canHaveChildren: true,
    },
    {
      id: '16',
      label: 'QA',
      parentId: '5',
      isExpanded: false,
      icon: ICON_DOCUMENT_EMPTY,
      canHaveChildren: true,
    },
    {
      id: '17',
      label: '🤌 Knowledge Base',
      parentId: '5',
      isExpanded: false,
      icon: ICON_DOCUMENT,
      canHaveChildren: true,
    },
    {
      id: '18',
      label: '🗺 2025 Roadmap',
      parentId: '5',
      isExpanded: false,
      icon: ICON_DOCUMENT,
      canHaveChildren: true,
    },
    { id: '19', label: 'Notifications', parentId: null, isExpanded: false, icon: ICON_BELL },
    { id: '20', label: 'Archive', parentId: null, isExpanded: false, icon: ICON_CUBE },
  ],
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleExpand: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload)
      const hasChildren = state.items.some((child) => child.parentId === item?.id)

      if (item && hasChildren) {
        item.isExpanded = !item.isExpanded
      }
    },
    addMenuItem: (
      state,
      action: PayloadAction<{ parentId: string; label: string; icon?: string }>
    ) => {
      const parent = state.items.find((item) => item.id === action.payload.parentId)

      if (parent && parent.canHaveChildren) {
        const newItem: TMenuItem = {
          id: String(state.items.length + 1),
          label: action.payload.label,
          parentId: action.payload.parentId,
          isExpanded: false,
          icon: action.payload.icon || ICON_DOCUMENT,
          canHaveChildren: true,
        }
        state.items.push(newItem)
      }
    },
  },
})

export const { toggleExpand, addMenuItem } = menuSlice.actions

export default menuSlice.reducer
