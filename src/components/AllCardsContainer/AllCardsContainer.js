import { useState, useEffect } from 'react'
import './AllCardsContainer.scss'
import Post from '../UI/Post/Post'

function AllCardsContainer() {
   const [posts, setPosts] = useState([])
   const [loaded, setLoaded] = useState(false)

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(data => {
            setLoaded(true)
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
         {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
   )
}

export default AllCardsContainer