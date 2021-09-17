import React, { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { addNewPost } from "../../features/counter/counterSlice";

import { Button } from "../ui/Button/Button";
import { Input, Textarea } from "../ui/input/input";
import { postType } from '../ui/Post/Post'

import "./NewPostForm.scss"

export interface IFormInput {
	title: string,
	body: string,
}

const createNewPost = (data: IFormInput) => {
	const now = new Date().valueOf()
	const userId = 0
	return {
		title: data.title,
		body: data.body,
		id: now,
		userId: userId,
		isFavorite: false
	}
}

export const NewPostForm: React.FC<{ isActive: boolean, setIsActive: Dispatch<SetStateAction<boolean>> }> = ({ isActive, setIsActive }) => {
	const dispatch = useDispatch()
	const { reset, formState: { errors }, handleSubmit, control } = useForm<IFormInput>({
		defaultValues: {
			body: "",
			title: ""
		},
		mode: "onChange"
	})

	const closeForm = () => {
		setIsActive(false)
		reset()
	}
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		if (data.body.trim() !== '' && data.title.trim() !== '') addPost(data)
	}

	const addPost = (data: IFormInput) => {
		const newPost: postType = createNewPost(data)
		dispatch(addNewPost(newPost))
		closeForm()
	}

	return (
		<div className={isActive ? "add-post active" : "add-post"}>
			<form name="add-post" className="add-post__form form card" onSubmit={handleSubmit(onSubmit)}>
				<div className="card-content">
					<h2 className="form__title card-title">Create new post</h2>
					<Input control={control} name="title" rules={{ required: true }} />
					<Textarea control={control} name="body" rules={{ required: true }} />
				</div>
				<div className="card-action">
					<Button text="Confirm" styles="indigo darken-3" btnType="btn" type="submit" />
					<Button text="Cancel" btnType="btn-flat" type="button" onClick={closeForm} />
				</div>
			</form>
		</div>
	)
}