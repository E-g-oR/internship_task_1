import React from "react";
interface IInput {
	inputId: string,
	name: string,
	type?: string,
	labelText: string,
	inputPlaceholder?: string
}
export const Input: React.FC<IInput> = ({ inputId, name, type, labelText, inputPlaceholder }) => {
	return (
		<div className="form__input input-field">
			<input type={type} id={inputId} name={name} placeholder={inputPlaceholder} />
			<label htmlFor={name}> {labelText} </label>
		</div>
	)
}
export const Textarea: React.FC<IInput> = ({ inputId, name, type, labelText, inputPlaceholder }) => {
	return (
		<div className="form__input input-field">
			<textarea className="materialize-textarea" id={inputId} name={name} placeholder={inputPlaceholder} />
			<label htmlFor={name}> {labelText} </label>
		</div>
	)
}
