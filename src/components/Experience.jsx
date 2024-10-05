import React from 'react'
import { Experiences } from '../constants/constants'

const Experience = () => {
  return (
    <main className='p-12 h-screen'>
      <section className='w-full h-full   grid grid-cols-1'>
        <div className=' border-2 grid grid-cols-2' >
          {Experiences.map((exp, index) => (
            <p className=''>{exp.title}</p>
          ))}
        </div>

        <div>
          test
        </div>
      </section>
    </main>
  )
}

export default Experience