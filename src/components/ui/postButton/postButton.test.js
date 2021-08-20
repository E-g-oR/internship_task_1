import React from "react";
import { render, screen, cleanup, unmountComponentAtNode, queryByText, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import PostButton from "./PostButton";
import { Button } from "../Button/Button";
import userEvent from "@testing-library/user-event";

describe('button render', () => {
	const mockClickHandler = jest.fn()
	const postData = {
		id: 1,
		userId: 1,
		title: 'post title',
		body: 'post body',
		isFavorite: false
	}
	it('should render button', () => {
		render(<PostButton text='button' postObj={postData} clickHandler={mockClickHandler} />)
		expect(screen.queryByText(/button/)).toBeInTheDocument()
	})

	it('should call function', () => {
		render(<PostButton text='button' postObj={postData} clickHandler={mockClickHandler} />)
		userEvent.click(screen.queryByText(/button/))
		expect(mockClickHandler).toHaveBeenCalled()
	})
})