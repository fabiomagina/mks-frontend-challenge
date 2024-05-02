import { configureStore } from '@reduxjs/toolkit'
import cartMenu from './reducers/cartMenu'
import cartItems from './reducers/cartItems'

export const makeStore = () => {
  return configureStore({
    reducer: {
      cartMenu: cartMenu,
      cartItems: cartItems
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']