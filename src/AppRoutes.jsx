import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Otp from './components/otp/Otp';
import LeaderBoard from './components/leaderboard/LeaderBoard';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Login from './components/Authentication/login/Login';
import SignUp from './components/Authentication/sign-up/SignUp';
import 'react-toastify/dist/ReactToastify.css'
import MyTeam from './components/my-team/MyTeam';
import Support from './components/support/Support';
import Share from './components/share/Share';
import Feedback from './components/feedback/Feedback';
import Questions from './components/Questions/Questions';

const AppRoutes = () =>{
  return (
    <Routes>
        <Route path='/' element= {<SplashScreen  />} />
        <Route path='/home' element= {<Home  />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/leaderboard' element={<LeaderBoard />} />
        <Route path='/my-team' element={<MyTeam />} />
        <Route path='/support' element={<Support />} />
        <Route path='/share' element={<Share />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element='Page does not exist'/>
    </Routes>
  )
}

export default AppRoutes