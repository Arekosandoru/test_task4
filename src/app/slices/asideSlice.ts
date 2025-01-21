import { createSlice } from '@reduxjs/toolkit'

type TAsideState = {
  isExpanded: boolean
}

const initialState: TAsideState = { isExpanded: true }

const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    toggleAside: (state) => {
      state.isExpanded = !state.isExpanded
    },
  },
})

export const { toggleAside } = asideSlice.actions

export default asideSlice.reducer
