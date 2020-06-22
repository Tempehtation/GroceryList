import React from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryList from './components/GroceryList';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }} >Grocery List</h1>
     <GroceryList/>
    </div>
  );
}

export default App;
