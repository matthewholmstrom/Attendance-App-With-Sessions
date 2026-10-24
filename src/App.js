import './App.css';
import React from 'react';
import Sidebar from './Components/Sidebar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Attendance from './Components/Attendance';
import Dashboard from './Components/Dashboard';
import Players from './Components/Players';
import PlayerView from './Components/PlayerView';
import CsvImport from './Components/CsvImport';

function App() {
  return (

    <BrowserRouter>
    
    <Routes>

      <Route path='/' element = {<Dashboard/>}></Route>
      <Route path='/attendance' element = {<Attendance/>}></Route>
      <Route path='/players' element = {<Players/>}></Route>
      <Route path= '/players/:username' element = {<PlayerView/>}></Route>
      <Route path='/csv' element = {<CsvImport/>}></Route>

    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
