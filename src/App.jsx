import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import {BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { GameplayProvider } from './context/gameplayContext';
import AppRoutes from './AppRoutes';


function App() {
  return (
      <BrowserRouter>
      <GameplayProvider>
        <ToastContainer limit={1} />
        <AppRoutes />
    </GameplayProvider>
      </BrowserRouter>
  );
}

export default App;
