import './App.css';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Otp from './components/otp/Otp';
import { Component } from 'react';
import LeaderBoard from './components/leaderboard/LeaderBoard';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/home' element= {<Home  />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/leaderboard' element={<LeaderBoard />} />
          <Route path='*' element='Page does not exist'/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
