import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Number from './components/Number';
import String from './components/String';

function App() {


  return (
    <div className='App'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:num" element={<Number/>} />
        
        <Route path="/:num/:color/:bColor" element={<Number/>} />

          {/* there is a bug in our function so we change the route */}
        <Route path="/jsbug/:str" element={<String/>}/>
        <Route path="/jsbug/:str/:color/:bColor" element={<String/>} />

      </Routes>

    </div>
  );
}

export default App;
