import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './features/shopingCart/slice'

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
})
