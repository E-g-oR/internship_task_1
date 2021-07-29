import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../../features/counter/counterSlice';
import Button from '../Button/button';
import './Post.scss'

export default function Post({ post }) {
   const posts = useSelector((state) => state.counter.favoritePosts)
   const dispatch = useDispatch()
   let buttonText = 'Add to favorites'
   let postClassName = "all-cards-container__post post"
   const index = posts.findIndex(item => item.id === post.id)

   if (index !== -1) {
      buttonText = 'Remove'
      postClassName = "all-cards-container__post post favorite"
   }

   const addToFavorite = () => {
      if (index !== -1) {
         dispatch(decrement(index))
      } else {
         dispatch(increment(post))
      }
   }

   return (
      <div className={postClassName}>
         <h3 className="post__title">{post.title}</h3>
         <p className="post__body">{post.body}</p>
         <Button text={buttonText} clickHandler={addToFavorite} />
      </div>
   )
}