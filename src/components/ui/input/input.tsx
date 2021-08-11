import React, { ChangeEventHandler } from "react";
interface IInput {
	name: string,
	type?: 'email' | 'tel' | 'text' | 'search' | 'url' | undefined,
	labelText: string,
}
interface ITextarea {
	name: string,
	type?: 'email' | 'tel' | 'text' | 'search' | 'url',
	labelText: string,
}
export const Input: React.FC<IInput> = ({ name, type, labelText }) => {
	return (
		<div className="form__input input-field">
			<input type={type} id={name} name={name} />
			<label htmlFor={name}> {labelText} </label>
		</div>
	)
}

export const Textarea: React.FC<ITextarea> = ({ name, type, labelText }) => {
	return (
		<div className="form__input input-field">
			<textarea className="materialize-textarea" id={name} name={name} />
			<label htmlFor={name}> {labelText} </label>
		</div>
	)
}
