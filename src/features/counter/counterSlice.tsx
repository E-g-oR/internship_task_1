import { CaseReducer, createSlice } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
const incr: CaseReducer<RootStateOrAny, RootStateOrAny> = (state, action) => {
   state.favoritePosts.push(action.payload)
}
const decr: CaseReducer<RootStateOrAny, RootStateOrAny> = (post, state) => {
   const index = state.payload
   post.favoritePosts.splice(index, 1)
}
const addAll: CaseReducer<RootStateOrAny, RootStateOrAny> = (state, action) => {
   state.allPosts = action.payload
}
export const counterSlice = createSlice({
   name: 'counter',
   initialState: {
      allPosts: [],
      favoritePosts: []
   },
   reducers: {
      increment: incr,
      decrement: decr,
      addAllPosts: addAll
   },
})

export const { increment, decrement, addAllPosts } = counterSlice.actions
export default counterSlice.reducer