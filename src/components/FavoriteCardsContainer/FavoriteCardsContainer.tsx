import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Post, { postType } from '../ui/Post/Post'
import './FavoriteCardsContainer.scss'

const FavoriteCardsContainer: React.FC = () => {
   const posts: postType[] = useSelector((state: RootStateOrAny) => state.counter.favoritePosts)

   return (
      <div data-testid="favorite-cards-container" className="favorite-cards-container">
         {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
   )
}

export default FavoriteCardsContainer