import React from 'react'
import { postType } from '../Post/Post'
import './button.scss'

interface IPostButton {
   text: string,
   clickHandler: () => void,
   postObj: postType
}

const PostButton: React.FC<IPostButton> = ({ text, clickHandler, postObj }) => {

   return (
      <button data-testid="post-button" className="post__button waves-effect btn" onClick={() => { clickHandler() }}>{text}</button>
   )
}
export default PostButton