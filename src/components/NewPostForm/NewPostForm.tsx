import React, { Dispatch, SetStateAction, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { addNewPost } from "../../features/counter/counterSlice";

import { Button } from "../UI/Button/Button";
import { Input } from "../UI/input/input";
import { postType } from '../UI/Post/Post'

import "./NewPostForm.scss"

interface IFormInput {
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
	const { register, reset, formState: { errors }, handleSubmit, control } = useForm<IFormInput>()

	const closeForm = () => {
		setIsActive(false)
		reset()
	}
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		const newPost: postType = createNewPost(data)
		dispatch(addNewPost(newPost))
		closeForm()
	}

	return (
		<div className={isActive ? "add-post active" : "add-post"}>
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