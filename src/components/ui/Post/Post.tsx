import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
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
   const favoritePosts = useSelector((state: RootStateOrAny) => state.counter.favoritePosts) //! change state type
   const dispatch = useDispatch()
   const [isFavorite, setIsFavorite] = useState<boolean>(post.isFavorite)
   post = {
      id: post.id,
      body: post.body,
      isFavorite: isFavorite,
      title: post.title,
      userId: post.userId
   }

   const addToFavorite = (postObj: postType): void => {
      setIsFavorite(true)
      post.isFavorite = true
      dispatch(increment(postObj))

   }
   const removeFromFavorite = (): void => {
      setIsFavorite(false)
      post.isFavorite = false
      let index: number = favoritePosts.findIndex((item: postType) => item.id === post.id)
      dispatch(decrement(index))
   }

   return (
      <div className={isFavorite ? 'all-cards-container__post post favorite' : 'all-cards-container__post post'}>
         <div className="card-content black-text">
            <h3 className="post__title card-title">{post.title}</h3>
            <p className="post__body">{post.body}</p>
         </div>
         <div className="card-action" >
            <Button text={isFavorite ? 'Remove' : 'Add to favorites'} clickHandler={isFavorite ? removeFromFavorite : addToFavorite} postObj={post} />
         </div>
      </div>
   )
}
export default Post