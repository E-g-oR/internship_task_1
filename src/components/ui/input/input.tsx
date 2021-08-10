import React, { ChangeEventHandler } from "react";
interface IInput {
	value: string,
	name: string,
	type?: 'email' | 'tel' | 'text' | 'search' | 'url' | undefined,
	labelText: string,
	onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void
}
interface ITextarea {
	value: string,
	name: string,
	type?: 'email' | 'tel' | 'text' | 'search' | 'url' | undefined,
	labelText: string,
	onChangeFunc: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}
export const Input: React.FC<IInput> = ({ value, name, type, labelText, onChangeFunc }) => {
	return (
		<div className="form__input input-field">
			<input value={value} type={type} id={name} name={name} onChange={onChangeFunc} />
			<label htmlFor={name}> {labelText} </label>
		</div>
	)
}

export const Textarea: React.FC<ITextarea> = ({ value, name, type, labelText, onChangeFunc }) => {
	return (
		<div className="form__input input-field">
			<textarea value={value} className="materialize-textarea" id={name} name={name} onChange={onChangeFunc} />
			<label htmlFor={name}> {labelText} </label>
		</div>
	)
}
