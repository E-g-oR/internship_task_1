import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import store from '../../app/store';

import Post, { postType } from '../ui/Post/Post'
import './FavoriteCardsContainer.scss'

const FavoriteCardsContainer: React.FC = () => {
   const state = useSelector((state: RootStateOrAny) => state)

   return (
      <div id="favorite-cards-container" data-testid="favorite-cards-container" className="favorite-cards-container">
         {state.allPosts.map((post: postType) => post.isFavorite && <Post key={post.id} post={post} />)}
      </div>
   )
}

export default FavoriteCardsContainer