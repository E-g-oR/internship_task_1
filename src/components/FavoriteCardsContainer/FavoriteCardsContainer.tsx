import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Post, { postType } from '../UI/Post/Post'
import './FavoriteCardsContainer.scss'

const FavoriteCardsContainer: React.FC = () => {
   const posts: postType[] = useSelector((state: RootStateOrAny) => state.counter.favoritePosts)

   return (
      <div className="favorite-cards-container">
         Favorite Cards Container
         <div>
            {posts.map(post => <Post key={post.id} post={post} />)}
         </div>
      </div>
   )
}

export default FavoriteCardsContainer