import { useSelector } from 'react-redux';
import Post from '../UI/Post/Post'
import './FavoriteCardsContainer.scss'

function FavoriteCardsContainer() {
   const posts = useSelector((state) => state.counter.favoritePosts)
   // console.log(posts);
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