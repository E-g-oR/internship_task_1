import './App.scss';
import React from 'react';
import AllCardsContainer from './components/AllCardsContainer/AllCardsContainer';
import FavoriteCardsContainer from './components/FavoriteCardsContainer/FavoriteCardsContainer';
import CardDetails from './components/CardDetails/CardDetails';
import { Button } from './components/UI/Button/Button';
import { NewPostForm } from './components/NewPostForm/NewPostForm';

const App: React.FC = () => {
  const showPopup = () => {
    const $addPost = document.querySelector('.add-post')
    $addPost?.classList.add('active')
  }
  return (
    <div className="App">
      <Button text="Add new post" type="button" onClick={showPopup} styles="indigo darken-3" btnType="btn" />
      <div className="App__containers">
        <AllCardsContainer />
        <FavoriteCardsContainer />
        <CardDetails />
      </div>
      <NewPostForm />
    </div>
  );
}

export default App;
