import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Form/>
      <Routes>
        <Route path='/people/:peopleId' element={<People/>} />
        <Route path='/planets/:planetsId' element={<Planets/>} />

        
      </Routes>

    </div>
  );
}

export default App;
