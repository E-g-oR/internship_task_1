import logo from './logo.svg';
import './App.css';
import AllCardsContainer from './AllCardsContainer';
import FavoriteCardsContainer from './FavoriteCardsContainer';
import CardDetails from './CardDetails';

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
