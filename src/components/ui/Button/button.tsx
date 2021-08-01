import React from 'react'
import { postType } from '../Post/Post'
import './button.scss'

interface IButton {
   text: string,
   clickHandler: (postIndex: number, postObj: postType) => void,
   postIndex: number,
   postObj: postType
}

const Button: React.FC<IButton> = ({ text, clickHandler, postIndex, postObj }) => {
   return (
      <button className="post__button" onClick={() => { clickHandler(postIndex, postObj) }}>{text}</button>
   )
}
export default Button