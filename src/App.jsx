import React from 'react'
import './App.css'
import Hero from './Components/Hero'
import Movies from './Components/Movies'
import Card from './Components/Card'
import Question from './Components/Question'
import Footer from './Components/Footer'
function App() {
  return (
    <div>
      <Hero/>
      <Movies/>
      <Card/>
      <Question/>
      <Footer/>
    </div>
  )
}

export default App