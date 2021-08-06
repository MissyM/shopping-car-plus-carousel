import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  articles: {},
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    increment: (state, { payload: { article } }) => {
      state.articles[article.id].amount += 1
    },
    decrement: (state, { payload: { article } }) => {
      state.articles[article.id].amount -= 1
    },
    add: (state, { payload: { article } }) => {
      if (!state.articles[article.id]) {
        state.articles[article.id] = {
          data: article,
          amount: 1,
          price: article.price,
        }
      } else {
        state.articles[article.id].amount += 1
      }
    },
    remove: (state, { payload: { article } }) => {
      delete state.articles[article.id]
    },
  },
})

// Action creators are generated for each case reducer function
export const actions = shoppingCartSlice.actions

export default shoppingCartSlice.reducer
