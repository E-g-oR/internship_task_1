import React from "react";
interface Ibutton {
	text: string,
	type: 'button' | 'submit' | 'reset' | undefined
	styles?: string,
	btnType?: 'btn' | 'btn-flat' | 'btn-floating' | 'btn-large' | 'btn-small'
	onClick?: () => void
}

export const Button: React.FC<Ibutton> = ({ text, type, styles, btnType, onClick }) => {
	return <button className={`waves-effect waves-light ${styles} ${btnType}`} onClick={onClick} type={type}>{text}</button>
}