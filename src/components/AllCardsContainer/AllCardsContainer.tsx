import React, { useEffect } from 'react'
import Post, { postType } from '../ui/Post/Post'
import './AllCardsContainer.scss'
import { Preloader } from '../preloader/Preloader'
import { IStore } from '../../App'
import { observer } from 'mobx-react'



const AllCardsContainer: React.FC<{ store: IStore }> = observer(({ store }) => {
   useEffect(() => {
      if (!store.allPosts.length) {
         store.getPosts()
      }

   }, [store])
   return (<div data-testid="all-cards-container" className="all-cards-container z-depth-2">
      {store.allPosts.length ? store.allPosts.map((post: postType) => <Post key={post.id} post={post} />) : <Preloader />}
   </div>)
})


export default AllCardsContainer