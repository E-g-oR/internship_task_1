import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { NewPostForm } from "./NewPostForm";
import { Provider } from 'react-redux';
import store from '../../app/store';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';

const mockSetIsActive = jest.fn()

describe('render form', () => {

	it('should be rendered fine', () => {

		act(() => {
			render(<Provider store={store}> <NewPostForm isActive={false} setIsActive={mockSetIsActive} /></Provider>)
		})

		expect(screen.queryByText(/title/i)).toBeInTheDocument()
		expect(screen.queryByLabelText(/body/i)).toBeInTheDocument()

	})

})

describe('check change values', () => {

	it('changes input value', async () => {

		await act(async () => {
			render(<Provider store={store}> <NewPostForm isActive={false} setIsActive={mockSetIsActive} /></Provider>)
		})
		const input = screen.getByTestId(/input/)

		await act(async () => {
			fireEvent.change(input, { target: { value: 'post body' } })
			// userEvent.type(screen.getByTestId(/input/), 'post body')  //* Хотел сделать через userEvent, но почему-то передается только последняя буква
		})

		expect(input).toHaveValue('post body')

	})

	it('changes textarea value', async () => {

		await act(async () => {
			render(<Provider store={store}> <NewPostForm isActive={false} setIsActive={mockSetIsActive} /></Provider>)
		})
		const textarea = screen.getByTestId(/textarea/)

		await act(async () => {
			fireEvent.change(textarea, { target: { value: 'post body' } })
		})

		expect(textarea).toHaveValue('post body')

	})

	it('displays helper text for both fields', async () => {

		await act(async () => {
			render(<Provider store={store}> <NewPostForm isActive={false} setIsActive={mockSetIsActive} /></Provider>)
		})
		const helperTexts = screen.getAllByTestId('helper-text')

		await act(async () => {
			fireEvent.click(screen.getByText(/add post/i))
		})

		helperTexts.forEach((elem) => {
			expect(elem).toHaveTextContent('Can not be empty')
		})

	})
})
