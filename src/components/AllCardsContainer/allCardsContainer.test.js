import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import store from '../../app/store';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import AllCardsContainer from './AllCardsContainer';
import { debug } from 'console';


global.fetch = jest.fn(() => Promise.resolve({
	json: () => Promise.resolve([
		{
			"userId": 1,
			"id": 1,
			"title": "first post",
			"body": "hello world"
		}
	])
}))

describe('render AllCardsContainer component', () => {
	it('renders fine', async () => {
		await act(async () => {
			render(
				<Provider store={store}>	<AllCardsContainer /> </Provider>)
		})
		const firstPost = screen.queryByText('first post')
		expect(screen.getByTestId('all-cards-container')).toBeInTheDocument()
		expect(firstPost).toBeInTheDocument()
		expect(screen.queryByText('Add to favorites')).toBeInTheDocument()
	})
})

it('button changed text content after clicked', async () => {
	await act(async () => {
		render(
			<Provider store={store}><AllCardsContainer /></Provider>)
	})
	const postButton = screen.queryByTestId('post-button')
	expect(postButton).toHaveTextContent(/add to favorite/i)
	await act(async () => {
		userEvent.click(postButton)
	})
	expect(postButton).toHaveTextContent(/remove/i)
})
