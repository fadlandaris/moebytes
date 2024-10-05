import React from 'react'
import { navLinks } from '../constants/constants'
import { Gi3dMeeple } from '../assets/assets'
import styles from '../style.js'

const Navbar = () => {
  return (
    <main className='px-8 py-4 font-montserrat flex justify-between items-center text-lightGray  fixed top-0 right-0 left-0 '>
      <div className='font-bold flex items-center text-title'>
        <Gi3dMeeple/>
        <span className='ml-1'>MOEBYTES</span>
      </div>

      <div className='text-[14px] flex justify-between items-center gap-x-12 '>
        {navLinks.map((nav, index) => (
          <a href="" key={index}>{nav.title}</a>
        ))}
      </div>

      {/* <button className={`${styles.button}`}>
        Contact Me 
     </button> */}

    </main>
  )
}

export default Navbar