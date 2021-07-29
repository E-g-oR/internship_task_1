import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
   name: 'counter',
   initialState: {
      value: 0,
      favoritePosts: []
   },
   reducers: {
      increment: (post, state) => {
         //* post.value += 1
         post.favoritePosts.push(state.payload)
      },
      decrement: (post, state) => {
         post.favoritePosts.splice(state.payload, 1)
      },
   },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer