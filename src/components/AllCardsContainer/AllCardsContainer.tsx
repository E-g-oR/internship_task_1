import React, { useState, useEffect } from 'react'
import './AllCardsContainer.scss'
import Post, { postType } from '../UI/Post/Post'


const AllCardsContainer: React.FC = () => {
   const [posts, setPosts] = useState<postType[]>([])
   const [loaded, setLoaded] = useState<boolean>(false)

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then((data) => {
            setLoaded(true)
            data.map((item: postType) => item.isFavorite = false)
            setPosts(data)
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
         {posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
   )
}

export default AllCardsContainer