import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  articles: {
    // 2123: {
    //   data: {},
    //   amount: 3,
    //   price: 90
    // }
  },
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    increment: (state) => {
      state.add += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    add: (state, action) => {
      const article = action.payload.article
      state.articles[article.id] = {
        data: article,
        amount: 1,
        price: article.price,
      }
    },
    remove: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, remove } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer
