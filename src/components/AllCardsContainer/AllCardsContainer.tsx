import React, { useState, useEffect } from 'react'
import './AllCardsContainer.scss'
import Post, { postType } from '../UI/Post/Post'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { addAllPosts } from '../../features/counter/counterSlice'

const AllCardsContainer: React.FC = () => {
   let allPosts: postType[] = useSelector((state: RootStateOrAny) => state.counter.allPosts)
   const dispatch = useDispatch()
   const favoritePosts = useSelector((state: RootStateOrAny) => state.counter.favoritePosts)
   const [posts, setPosts] = useState<postType[]>([])
   const [loaded, setLoaded] = useState<boolean>(false)

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then((data) => {
            setLoaded(true)
            data.map((item: postType) => item.isFavorite = false)
            setPosts(data)
            dispatch(addAllPosts(data))

         })
   }, [])
   if (!loaded) {
      return (
         <div className="all-cards-container">
            <p>Loading...</p>
         </div>
      )
   }
   return (
      <div className="all-cards-container">
         {allPosts.map((post) => <Post key={post.id} post={post} />)}
      </div>
   )
}

export default AllCardsContainer