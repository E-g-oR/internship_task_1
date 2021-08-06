import React from 'react'
import { postType } from '../Post/Post'
import './button.scss'

interface IButton {
   text: string,
   clickHandler: (postObj: postType) => void,
   postObj: postType
}

const Button: React.FC<IButton> = ({ text, clickHandler, postObj }) => {

   return (
      <button className="post__button" onClick={() => { clickHandler(postObj) }}>{text}</button>
   )
}
export default Button