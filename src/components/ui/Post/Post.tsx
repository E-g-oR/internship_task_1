import { observer } from 'mobx-react'
import React from 'react'
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


const Post: React.FC<{ post: postType }> = observer(({ post }) => {

   const addToFavorite = (): void => {
      post.isFavorite = !post.isFavorite
   }

   const getClassName = (postObj: postType) => {
      let className = 'all-cards-container__post post card z-depth-2'
      if (postObj.isFavorite) {
         className += ' lime accent-2'
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
})
export default Post