import React from "react";
import './App.css';

/* Custom Component */
import MovieSearch from './Components/MovieSearch/MovieSearch'; 
 
function App() {
  return (
    <div className="container">
      <h1 className='title'>React Movie Search</h1>
      <MovieSearch/>
    </div>
  );
}

export default App;
