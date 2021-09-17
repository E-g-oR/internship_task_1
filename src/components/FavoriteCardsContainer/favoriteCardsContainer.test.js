import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';

import { Provider } from 'react-redux';
import store from '../../app/store';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import FavoriteCardsContainer from './FavoriteCardsContainer';

let container = null;
beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

describe('render <FavoriteCardsContainer/> component', () => {
	it('renders fine', async () => {
		await act(async () => {
			render(<Provider store={store} > <FavoriteCardsContainer /> </Provider>, container)
		})
		expect(screen.getByTestId('favorite-cards-container')).toBeInTheDocument()
	})
})