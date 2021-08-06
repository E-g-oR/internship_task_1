import { CaseReducer, createSlice } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
const incr: CaseReducer<RootStateOrAny, RootStateOrAny> = (post, state) => {
   post.favoritePosts.push(state.payload)
}
const decr: CaseReducer<RootStateOrAny, RootStateOrAny> = (post, state) => {
   const index = state.payload
   post.favoritePosts.splice(index, 1)
}

export const counterSlice = createSlice({
   name: 'counter',
   initialState: {
      favoritePosts: []
   },
   reducers: {
      increment: incr,
      decrement: decr,
   },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer