import './App.scss';
import AllCardsContainer from './components/AllCardsContainer/AllCardsContainer';
import FavoriteCardsContainer from './components/FavoriteCardsContainer/FavoriteCardsContainer';
import CardDetails from './components/CardDetails/CardDetails';

function App() {
  return (
    <div className="App">
      <AllCardsContainer />
      <FavoriteCardsContainer />
      <CardDetails />
    </div>
  );
}

export default App;
