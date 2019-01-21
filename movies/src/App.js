import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Main from './components/MainLayout'
import './App.css'
// import MovieRow from './pages/MovieRow';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Main />
      {/* <MovieRow /> */}
    </div>
  )
}

export default App
