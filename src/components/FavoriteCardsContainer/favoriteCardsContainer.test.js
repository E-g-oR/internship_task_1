import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import store from '../../app/store';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import FavoriteCardsContainer from './FavoriteCardsContainer';

describe('render favoriteCardsContainer component', () => {
	it('renders fine', async () => {
		await act(async () => {
			render(<Provider store={store} > <FavoriteCardsContainer /> </Provider>)
		})
		expect(screen.getByTestId('favorite-cards-container')).toBeInTheDocument()
	})
})