import React, { useState } from 'react';
import AllCardsContainer from './components/AllCardsContainer/AllCardsContainer';
import FavoriteCardsContainer from './components/FavoriteCardsContainer/FavoriteCardsContainer';
import CardDetails from './components/CardDetails/CardDetails';
// import { Button } from './components/ui/Button/Button';
import { Button } from './components/ui/Button/Button';
import { NewPostForm } from './components/NewPostForm/NewPostForm';
import './App.scss';

const App = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false)
  const showPopup = () => setIsModalActive(true)

  return (
    <div className="app" data-testid="app">
      <Button text="add new post" type="button" onClick={showPopup} styles="indigo darken-3" btnType="btn" />
      <div className="app__containers">
        <AllCardsContainer />
        <FavoriteCardsContainer />
        <CardDetails />
      </div>
      <NewPostForm isActive={isModalActive} setIsActive={setIsModalActive} />
    </div>
  );
}

export default App;
