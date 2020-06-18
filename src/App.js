import React from 'react';
import logo from './logo.svg';
import './App.css';
import LightSwitch from './Components/LightSwitch';
import PersonCard from './Components/PersonCard';
import Counter from './Components/useState';

function App() {
  return (
    <>
        <LightSwitch/>
        
        <PersonCard firstName = "Jane" lastName = "Doe" Age = {25} hairColor = "Brown" />
        <PersonCard firstName = "Joe" lastName = "Horn" Age = {55} hairColor = "Grey" />
        <PersonCard firstName = "Bill" lastName = "Brock" Age = {88} hairColor = "Blue" />

        <Counter/>
    </>
  );
}

export default App;
