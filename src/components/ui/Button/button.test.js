import React from 'react';
import { render, screen, cleanup, unmountComponentAtNode } from '@testing-library/react';
import '@testing-library/jest-dom'

import { Button } from './Button';

describe('render button', () => {
  it('renders button correctly', () => {
    render(<Button text='click me' />)
    expect(screen.queryByText(/click me/)).toBeInTheDocument()
  })
})