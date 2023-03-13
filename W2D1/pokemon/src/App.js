
import './App.css';
import { useState } from 'react';


function App() {
  const [pokemon, setPokemon] = useState([]);
  const fetchpok = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json())
      .then(response => { setPokemon(response.results) })

      .catch(err => console.log("errrrrr"))
  }
  return (
    <div className="App">
      <h1>feres</h1>
      <button onClick={fetchpok}>Fetch Pokemon</button>
      {pokemon.map((pokemon, index) => {


          return (<ul><li key={index}>{pokemon.name}</li></ul>)
      })}
    </div>
  );
}


export default App;
