import './Post.scss'
function Post(props) {

   return (
      <div className="all-cards-container__post post">
         <h3 className="post__title">{props.title}</h3>
         <p className="post__body">{props.body}</p>
      </div>
   )
}

export default Post