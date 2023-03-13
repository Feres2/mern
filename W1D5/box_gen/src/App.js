import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ColorForm from './components/ColorForm';
import Display from './components/Display';

function App() {
  const [color,setColor] = useState(["red","green","blue"])
  const addCol =(newCOl) =>{
    const colorCopy=[...color]
    colorCopy.push(newCOl)
    setColor(colorCopy)
    //? =====================best methode===================== setSport([...sport,newSport])
  }
  return (
    <fieldset>
      <legend>App.js</legend>
    <div className="App">
      <h1>Color</h1>
      <ColorForm fn = {addCol}/>
      {JSON.stringify(color)}

      <Display colors={color}/>
    </div>
    </fieldset>
  );
}

export default App;
