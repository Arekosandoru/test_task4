import { RootState } from '@/app/store.ts'
import { createSelector } from '@reduxjs/toolkit'

const getSystemState = (state: RootState) => state.system
const getModalsStack = (state: RootState) => getSystemState(state).modals || []

export const isOpenModal = (state: RootState, id: string) => getModalsStack(state)[0]?.id === id
export const selectModalById = (state: RootState, id: string) =>
  getModalsStack(state).find((modal) => modal.id === id)
export const selectModalPayload = createSelector([selectModalById], (modal) => modal?.payload || {})
