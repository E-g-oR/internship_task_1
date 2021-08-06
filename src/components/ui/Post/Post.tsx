import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../../features/counter/counterSlice';
import Button from '../Button/button';
import './Post.scss'
export interface postType {
   userId: number,
   id: number,
   title: string,
   body: string,
   isFavorite: boolean
}
export interface IRootSate {
   favoritePosts: postType[]
}


const Post: React.FC<{ post: postType }> = ({ post }) => {
   const dispatch = useDispatch()

   const addToFavorite = (postObj: postType): void => {
      dispatch(increment(postObj))
   }

   const removeFromFavorite = (postObj: postType): void => {
      dispatch(decrement(postObj))
   }

   return (
      <div className={post.isFavorite ? 'all-cards-container__post post favorite' : 'all-cards-container__post post'}>
         <div className="card-content black-text">
            <h3 className="post__title card-title">{post.title}</h3>
            <p className="post__body">{post.body}</p>
         </div>
         <div className="card-action" >
            <Button text={post.isFavorite ? 'Remove' : 'Add to favorites'} clickHandler={post.isFavorite ? removeFromFavorite : addToFavorite} postObj={post} />
         </div>
      </div>
   )
}
export default Post