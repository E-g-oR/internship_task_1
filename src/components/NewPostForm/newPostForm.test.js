import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { NewPostForm } from "./NewPostForm";
import { Provider } from 'react-redux';
import store from '../../app/store';


describe('render form', () => {
	const mockSetIsActive = jest.fn()
	it('should be rendered fine', () => {
		render(<Provider store={store}> <NewPostForm isActive={false} setIsActive={mockSetIsActive} /></Provider>)
		expect(screen.queryByText(/title/i)).toBeInTheDocument()
		expect(screen.queryByLabelText(/body/i)).toBeInTheDocument()
	})
})