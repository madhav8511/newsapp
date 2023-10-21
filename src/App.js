import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes> <Route exact path='/' element={<News pagesize={6} country="in" category="general"/>} /> </Routes>
        <Routes> <Route exact path='/business' element={<News pagesize={6} country="in" category="business"/>} /> </Routes>
        <Routes> <Route exact path='/sports' element={<News pagesize={6} country="in" category="sports"/>} /> </Routes>
        <Routes> <Route exact path='/health' element={<News pagesize={6} country="in" category="health"/>} /> </Routes>
        <Routes> <Route exact path='/education' element={<News pagesize={6} country="in" category="education"/>} /> </Routes>
        <Routes> <Route exact path='/tecnology' element={<News pagesize={6} country="in" category="space"/>} /> </Routes>
        </Router>
      </div>
    )
  }
}


