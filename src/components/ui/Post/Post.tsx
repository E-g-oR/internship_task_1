import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../../features/counter/counterSlice';
import Button from '../Button/button';
import './Post.scss'
export type postType = {
   userId: number,
   id: number,
   title: string,
   body: string
}
export interface IRootSate {
   favoritePosts: postType[]
}


const Post: React.FC<{ post: postType }> = ({ post }) => {
   const favoritePosts = useSelector((state: RootStateOrAny) => state.counter.favoritePosts) //! change state type
   const dispatch = useDispatch()
   let index: number = -1

   let buttonText: string = 'Add to favorites'
   let postClassName: string = "all-cards-container__post post"

   if (favoritePosts) {
      index = favoritePosts.findIndex((item: postType) => item.id === post.id)
      if (index !== -1) {
         buttonText = 'Remove'
         postClassName = "all-cards-container__post post favorite"
      }
   }

   const addToFavorite = (postIndex: number, postObj: postType): void => {

      if (postIndex !== -1) {
         dispatch(decrement(postIndex))
      } else {
         dispatch(increment(postObj))
      }
   }

   return (
      <div className={postClassName}>
         <div className="card-content black-text">
            <h3 className="post__title card-title">{post.title}</h3>
            <p className="post__body">{post.body}</p>

         </div>
         <div className="card-action" >
            <Button text={buttonText} clickHandler={addToFavorite} postIndex={index} postObj={post} />
         </div>
      </div>
   )
}
export default Post