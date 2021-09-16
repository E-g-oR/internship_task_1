import React from 'react';
import { render, screen, cleanup, unmountComponentAtNode, queryByText, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Post from './Post';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import userEvent from '@testing-library/user-event';

const postData = {
	id: 1,
	userId: 1,
	title: 'post title',
	body: 'post body',
	isFavorite: false
}
describe('reneder post', () => {
	it('renders post correctly', () => {
		const { queryByTestId, queryByText } = render(<Provider store={store} >  <Post post={postData} /> </Provider>)
		expect(queryByText('post title')).toBeInTheDocument()
		expect(queryByTestId('post-button').textContent).toBe('Add to favorites');
	})
})
