import React, { useState, useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import store from '../../app/store'
import { POSTS_RECEIVED, POSTS_REQUESTED } from '../../features/action_types'
import Post, { postType } from '../ui/Post/Post'
import './AllCardsContainer.scss'
import { Preloader } from '../preloader/Preloader'

const AllCardsContainer: React.FC = () => {
   let state = useSelector((state: RootStateOrAny) => state)
   const dispatch = useDispatch()

   const [loaded, setLoaded] = useState<boolean>(false)

   useEffect(() => {
      store.dispatch({ type: POSTS_REQUESTED })
      // fetch('https://jsonplaceholder.typicode.com/posts')
      //    .then(response => response.json())
      //    .then((data) => {
      //       setLoaded(true)
      //       data.map((item: postType) => item.isFavorite = false)
      //       dispatch({ type: POSTS_RECEIVED, payload: data })
      //    })
   }, [dispatch])

   return (
      <div data-testid="all-cards-container" className="all-cards-container">
         {state.fetching ? <Preloader /> : state.allPosts.map((post: postType) => <Post key={post.id} post={post} />)}
      </div>
   )
}

export default AllCardsContainer