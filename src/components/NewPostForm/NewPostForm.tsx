import React from "react";
import { Button } from "../UI/Button/Button";
import { Input, Textarea } from "../UI/input/input";
import "./NewPostForm.scss"

export const NewPostForm: React.FC = () => {
	const onSubmitFunc = () => {
		console.log('Submit');
	}
	const onCancelFunc = () => {
		const $addPost = document.querySelector('.add-post')
		$addPost?.classList.remove('active')
	}
	return (
		<div className="add-post">
			<div className="add-post__form form card">
				<div className="card-content">
					<h2 className="form__title card-title">Create new post</h2>
					<Input inputId="post_title" labelText="Post title" name="post_title" type="text" />
					<Textarea inputId="post_text" labelText="Post text" name="post_text" type="text" />
				</div>
				<div className="card-action">
					<Button text="Add post" styles="indigo darken-3" btnType="btn" type="submit" onClick={onSubmitFunc} />
					<Button text="Cancel" btnType="btn-flat" type="reset" onClick={onCancelFunc} />
				</div>
			</div>
		</div>
	)
}