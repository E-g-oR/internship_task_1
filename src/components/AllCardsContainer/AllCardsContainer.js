import { useState, useEffect } from 'react'
import './AllCardsContainer.scss'
import Post from '../ui/Post/Post'

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
   } else if (loaded) return (
      <div className="all-cards-container">
         {posts.map(post => <Post key={post.id} title={post.title} body={post.body} />)}
      </div>
   )
}

export default AllCardsContainer