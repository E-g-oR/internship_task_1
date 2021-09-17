import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';

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

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

describe('reneder <Post/> component', () => {
	it('renders post correctly', async () => {
		await act(async () => {
			render(<Provider store={store}><Post post={postData} /></Provider>, container)
		})
		expect(screen.queryByText('post title')).toBeInTheDocument()
		expect(screen.queryByTestId('post-button').textContent).toBe('Add to favorites');
	})
})