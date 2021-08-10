import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { addNewPost } from "../../features/counter/counterSlice";

import { Button } from "../UI/Button/Button";
import { postType } from '../UI/Post/Post'

import "./NewPostForm.scss"

interface IFormInput {
	title: string,
	body: string,
}

export const NewPostForm: React.FC = () => {
	const dispatch = useDispatch()
	const { register, reset, formState: { errors }, handleSubmit } = useForm<IFormInput>()
	const $addPost = document.querySelector('.add-post')

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

	const closeForm = () => {
		$addPost?.classList.remove('active')
		reset()
	}
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		let newPost: postType | undefined = createNewPost(data)
		if (newPost !== undefined) {
			dispatch(addNewPost(newPost))
			closeForm()
		}
	}

	return (
		<div className="add-post">
			<form name="add-post" className="add-post__form form card" onSubmit={handleSubmit(onSubmit)}>
				<div className="card-content">
					<h2 className="form__title card-title">Create new post</h2>
					<div className="form__input input-field">
						<input type="text" {...register("title", { required: true, minLength: 5 })} />
						{errors.title?.type === "required" && "Title is required"}
						<label htmlFor="title"> Post title </label>
					</div>
					<div className="form__input input-field">
						<textarea className="materialize-textarea" {...register("body", { required: true, minLength: 15 })}></textarea>
						{errors.body?.type === "required" && "Text is also required"}
						<label htmlFor="body"> Post body </label>
					</div>
				</div>
				<div className="card-action">
					<Button text="Add post" styles="indigo darken-3" btnType="btn" type="submit" />
					<Button text="Cancel" btnType="btn-flat" type="button" onClick={closeForm} />
				</div>
			</form>
		</div>
	)
}




// !====================