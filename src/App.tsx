import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nabvar } from './components/Nabvar';
import { Login } from './pages/login/Login';
import { Registration } from './pages/registration/Registration';

function App() {
  return (
    <>
    <Nabvar/>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
    </Routes>
    </>
  );
}

export default App;
