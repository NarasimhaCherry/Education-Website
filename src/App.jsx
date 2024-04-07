import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Why from './Components/Why/Why'
import ACCA from './Components/ACCA/ACCA'
import Placements from './Components/Placements/Placements'
import Indigo from './Components/Indigo/Indigo'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Why />
      <ACCA />
      <Placements />
      <Indigo />
    </div>
  )
}

export default App