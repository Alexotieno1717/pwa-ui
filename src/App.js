import './App.css';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Otp from './components/otp/Otp';
import LeaderBoard from './components/leaderboard/LeaderBoard';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Login from './components/Authentication/login/Login';



function App() {
  return (
      <BrowserRouter>
        <Routes>
           <Route path='/' element= {<SplashScreen  />} />
          <Route path='/home' element= {<Home  />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/leaderboard' element={<LeaderBoard />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element='Page does not exist'/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
