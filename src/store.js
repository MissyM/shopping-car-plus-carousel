import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './features/shoppingCart/slice'

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
})
