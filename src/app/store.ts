import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import menuReducer from './slices/asideMenuSlice'
import asideReducer from './slices/asideSlice'
import systemReducer from './slices/systemSlice'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const menuPersistConfig = {
  key: 'menu',
  storage,
}

const asidePersistConfig = {
  key: 'aside',
  storage,
}

const rootReducer = combineReducers({
  menu: persistReducer(menuPersistConfig, menuReducer),
  aside: persistReducer(asidePersistConfig, asideReducer),
  system: systemReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
