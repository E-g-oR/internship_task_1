import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';

import { Button } from './Button';

const clickHandler = jest.fn()

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe('render <Button/> component', () => {
  it('renders button correctly', () => {
    render(<Button text='click me' onClick={clickHandler} />, container)
    expect(screen.queryByText(/click me/)).toBeInTheDocument()
  })
  it('click handler has been called', () => {
    render(<Button text='button' onClick={clickHandler} />, container)
    fireEvent.click(screen.queryByText('button'))
    expect(clickHandler).toHaveBeenCalled()
  })
})
