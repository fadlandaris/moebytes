import React from 'react'
import { Hero, Navbar, Experience } from './components/component'
import { purpleBackground } from './assets/assets'

const App = () => {
  return (
    <main className='text-title'>
      <div className='w-full relative h-screen '>
        <video src={purpleBackground} className="absolute inset-0 w-full h-full object-cover"autoPlay loop muted playsInline/>
        <Hero/>
      </div>
      
      <Navbar/>
      <Experience/>
    </main>
  )
}

export default App
