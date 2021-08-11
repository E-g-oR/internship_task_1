
import { useController, UseControllerProps } from "react-hook-form";
import { IFormInput } from "../../NewPostForm/NewPostForm";


export const Input = (props: UseControllerProps<IFormInput>) => {
	const { field, fieldState } = useController(props)

	return (
		<div className="form__input input-field">
			<input {...field} type="text" id={props.name} autoComplete="off" />
			<label htmlFor={props.name} > {props.name} </label>
			<span className="helper-text">{fieldState.invalid ? 'Can not be empty' : ''}</span>
		</div>
	)
}

export const Textarea = (props: UseControllerProps<IFormInput>) => {
	const { field, fieldState } = useController(props)
	return (
		<div className="form__input input-field">
			<textarea className="materialize-textarea" {...field} id={props.name} />
			<label htmlFor={props.name}> {props.name} </label>
			<span className="helper-text">{fieldState.invalid ? 'Can not be empty' : ''}</span>
		</div>
	)
}
