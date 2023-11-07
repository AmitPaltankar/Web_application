import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className='bodyPage'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='account' element={<Dashboard/>} />
          <Route path='payrole' element={<Dashboard/>} />
          <Route path='report' element={<Dashboard/>} />
          <Route path='advisor' element={<Dashboard/>} />
          <Route path='contacts' element={<Dashboard/>} />
          {/* <Route path='*' element={<Nomatch/>} /> */}
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
