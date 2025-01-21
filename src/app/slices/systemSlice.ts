import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TModal = {
  id: string
  payload?: Record<string, unknown>
}

type TSystemState = {
  modals: TModal[]
}

const initialState: TSystemState = { modals: [] }

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    openModalById: (state, action: PayloadAction<TModal>) => {
      const exists = state.modals.find((modal) => modal.id === action.payload.id)
      if (!exists) {
        state.modals.push(action.payload)
      }
    },
    closeModalById: (state, action: PayloadAction<string>) => {
      state.modals = state.modals.filter((modal) => modal.id !== action.payload)
    },
    closeAllModals: (state) => {
      state.modals = []
    },
  },
})

export const { openModalById, closeModalById, closeAllModals } = systemSlice.actions
export default systemSlice.reducer
