
import React from 'react';
import '@testing-library/jest-dom'
import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import userEvent from '@testing-library/user-event';

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
test('renders whole app to the document', async () => {
   await act(async () => {
      render(<Provider store={store}> <App /> </Provider>)
   })
   const button = screen.queryByText(/add to/i)
   const favContainer = screen.getByTestId('favorite-cards-container')

   expect(screen.queryByText('Add new post')).toBeInTheDocument()
   expect(screen.getByTestId('app')).toBeInTheDocument()
   expect(favContainer).toBeEmptyDOMElement()
   userEvent.click(button)
   expect(favContainer).not.toBeEmptyDOMElement()
});

test('adding new post', async () => {
   await act(async () => {
      render(<Provider store={store}> <App /> </Provider>)
   })

   const newPostBtn = screen.queryByText(/add new/i),
      titleInput = screen.queryByTestId(/input/i),
      bodyInput = screen.queryByTestId(/textarea/i),
      addPostBtn = screen.queryByText(/add post/i),
      AllCardsContainer = screen.queryByTestId('all-cards-container');

   await act(async () => {
      // userEvent.click(newPostBtn)
      fireEvent.change(titleInput, { target: { value: 'new post title' } })
      fireEvent.change(bodyInput, { target: { value: 'new post body text' } })
      userEvent.click(addPostBtn)
   })
   expect(screen.queryByText(/empty/i)).not.toBeInTheDocument()
   expect(AllCardsContainer).toHaveTextContent(/new post title/i)
})

test('does NOT adding new post if some info missed', async () => {
   await act(async () => {
      render(<Provider store={store}> <App /> </Provider>)
   })

   const newPostBtn = screen.queryByText(/add new/i),
      titleInput = screen.queryByTestId(/input/i),
      addPostBtn = screen.queryByText(/add post/i),
      AllCardsContainer = screen.queryByTestId('all-cards-container');

   await act(async () => {
      // userEvent.click(newPostBtn)
      fireEvent.change(titleInput, { target: { value: 'new post title' } })
      userEvent.click(addPostBtn)
   })
   expect(screen.queryByText(/empty/i)).toBeInTheDocument()
   expect(AllCardsContainer).not.toHaveTextContent(/new post title/i)
   expect(screen.queryByText(/new post title/i)).toBeFalsy()

})