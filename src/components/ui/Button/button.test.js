import React from 'react';
import { render, screen, cleanup, unmountComponentAtNode, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import { Button } from './Button';

const clickHandler = jest.fn()
it('renders button correctly', () => {
  render(<Button text='click me' onClick={clickHandler} />)
  expect(screen.queryByText(/click me/)).toBeInTheDocument()
})
it('click handler has been called', () => {
  render(<Button text='button' onClick={clickHandler} />)
  fireEvent.click(screen.queryByText('button'))
  expect(clickHandler).toHaveBeenCalled()
})