import { observer } from 'mobx-react';
import React from 'react';
import { IStore } from '../../App';

import Post, { postType } from '../ui/Post/Post'
import './FavoriteCardsContainer.scss'

const FavoriteCardsContainer: React.FC<{ store: IStore }> = observer(({ store }) => {
   return (
      <div id="favorite-cards-container" data-testid="favorite-cards-container" className="favorite-cards-container z-depth-2">
         {store.allPosts.map((post: postType) => post.isFavorite && <Post key={post.id} post={post} />)}
      </div>
   )
})

export default FavoriteCardsContainer