import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import CardDetails from './CardDetails';

describe('render CardDetails component', () => {
	it('renders fine', async () => {
		await act(async () => {
			render(<CardDetails />)
		})
		const component = screen.getByText(/card details/i)

		expect(component).toBeInTheDocument();
	})

})