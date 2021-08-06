import { CaseReducer, createSlice } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { postType } from "../../components/UI/Post/Post";


const incr: CaseReducer<RootStateOrAny, RootStateOrAny> = (state, action) => {
   state.allPosts.map((post: postType) => {
      if (post.id === action.payload.id) {
         post.isFavorite = true
         state.favoritePosts.push(post)
      }
   })
}

const decr: CaseReducer<RootStateOrAny, RootStateOrAny> = (state, action) => {
   const index: number = state.favoritePosts.findIndex((item: postType) => item.id === action.payload.id)
   state.allPosts.map((post: postType) => {
      if (post.id === action.payload.id) {
         post.isFavorite = false
      }
   })
   state.favoritePosts.splice(index, 1)
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