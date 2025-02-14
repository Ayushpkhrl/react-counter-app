
import './App.css';
import React, { useState } from 'react';
import Header from './my component/Header';

function App() { 
  const[A,setA]=useState(0);
  
  return (
    <div>
      <Header />
    <h1>username is {A}</h1>
    <button onClick={()=>{setA(A+1)}}> increase</button>
    <button onClick={()=>{setA(A-1)}}>  decresae</button>    
    </div>
  )
}

export default App;
