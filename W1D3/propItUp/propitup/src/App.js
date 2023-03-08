import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Doe"} lastName={"Jane"} age={45} hairColor="Black"  ></PersonCard>
      <PersonCard firstName={"Smith"} lastName={"Jhon"} age={88} hairColor="Brown"  ></PersonCard>
      <PersonCard firstName={"Fillmore"} lastName={"Millard"} age={50} hairColor="Brown"  ></PersonCard>
      <PersonCard firstName={"Smith"} lastName={"Maria"} age={52} hairColor="Brown"  ></PersonCard>
      

    </div>
  );
}

export default App;
