import './App.css';
import React from "react";
import {Routes,Route}from 'react-router-dom';
import NavBar from './Components/NavBar';
import UserList from './Components/UserList';
import Details from './Components/Details'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <h4 className='note'> CLICK  FOR MORE DETAILS </h4>
      <Routes>
        <Route path='/' element={< UserList />} />
        <Route path='Details/:id' element={<Details />} />      
      </Routes>
      <br/>

    </div>
  );
}

export default App;