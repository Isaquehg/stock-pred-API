import './App.css';
import React from "react";
import Predict from './components/Predict';

function App() {
  return (
    <div className="App">
    <header className="App-header">
        <h1>React and Flask</h1>
        <Predict/>
    </header>
  </div>
  );
}

export default App;
