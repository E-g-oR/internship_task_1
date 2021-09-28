import React from 'react'
import { useDispatch } from 'react-redux'
import { POST_TOGGLED } from '../../../features/action_types'
import PostButton from '../postButton/PostButton'
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
      dispatch({ type: POST_TOGGLED, payload: postObj.id })
   }

   const getClassName = (postObj: postType) => {
      let className = 'all-cards-container__post post card'
      if (postObj.isFavorite) {
         className += ' favorite'
      }
      if (postObj.userId === 0) {
         className += ' added'
      }
      return className
   }
   return (
      <div className={getClassName(post)}>
         <div className="card-content black-text">
            <h3 className="post__title card-title">{post.title}</h3>
            <p className="post__body">{post.body}</p>
         </div>
         <div className="card-action" >
            <PostButton text={post.isFavorite ? 'Remove' : 'Add to favorites'} clickHandler={addToFavorite} postObj={post} />
         </div>
      </div>
   )
}
export default Post