import './button.scss'

export default function Button({ text, clickHandler }) {
   return (
      <button className="post__button" onClick={clickHandler}>{text}</button>
   )
}