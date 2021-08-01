import './App.scss';
import React from 'react';
import AllCardsContainer from './components/AllCardsContainer/AllCardsContainer';
import FavoriteCardsContainer from './components/FavoriteCardsContainer/FavoriteCardsContainer';
import CardDetails from './components/CardDetails/CardDetails';

const App: React.FC = ()=> {
  return (
    <div className="App">
      <AllCardsContainer />
      <FavoriteCardsContainer />
      <CardDetails />
    </div>
  );
}

export default App;
