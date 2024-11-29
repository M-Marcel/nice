import React from 'react'
import Navbar from '../pages/Navbar'
import MainSection from './MainSection'

const DragandDrop = () => {
  return (
    <div className='draganddrop  bg-custom-bg bg-contain h-full sm:min-w-lg' >
      <Navbar />
      <MainSection />
    </div>
  )
}

export default DragandDrop
