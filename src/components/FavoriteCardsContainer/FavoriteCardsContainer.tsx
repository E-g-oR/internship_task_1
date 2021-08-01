import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Post, { postType } from '../UI/Post/Post'
import './FavoriteCardsContainer.scss'

const FavoriteCardsContainer: React.FC = () => {
   const posts: postType[] = useSelector((state: RootStateOrAny) => state.counter.favoritePosts)  //! change state type


   const favoriteList = () => {
      if (posts) {
         const favoritePosts = posts.map(post => <Post key={post.id} post={post} />)
         return favoritePosts
      } else return <></>
   }



   return (
      <div className="favorite-cards-container">
         Favorite Cards Container
         <div>
            {favoriteList()}
         </div>
      </div>
   )
}

export default FavoriteCardsContainer