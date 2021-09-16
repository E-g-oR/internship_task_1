import React, { useState, useEffect } from 'react'
import Post, { postType } from '../ui/Post/Post'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { addAllPosts } from '../../features/counter/counterSlice'
import './AllCardsContainer.scss'

const AllCardsContainer: React.FC = () => {
   let allPosts: postType[] = useSelector((state: RootStateOrAny) => state.counter.allPosts)
   const dispatch = useDispatch()
   const [loaded, setLoaded] = useState<boolean>(false)

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then((data) => {
            setLoaded(true)
            data.map((item: postType) => item.isFavorite = false)
            dispatch(addAllPosts(data))
         })
   }, [dispatch])

   if (!loaded) {
      return (
         <div data-testid="all-cards-container" className="all-cards-container">
            <p>Loading...</p>
         </div>
      )
   }
   return (
      <div data-testid="all-cards-container" className="all-cards-container">
         {allPosts.map((post) => <Post key={post.id} post={post} />)}
      </div>
   )
}

export default AllCardsContainer