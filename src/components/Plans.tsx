import React from 'react'
import portfolioImg from '../assets/portfolio-frame.png';
import plansImg from '../assets/plansFrame.png';

const Plans = () => {
  return (
    <div className='relative top-[300px] custom-l-bg3 flex flex-col items-center justify-center'>
      <div className="flex flex-col max-w-4xl items-center text-center justify-center pt-20 ">
        <h2 className="font-title mb-3 text-4xl lg:w-[38%]  text-black-300 leading-none text-center font-medium  ">We have plans that fit your goals</h2>
        <p className="text-center text-xs w-auto lg:w-[29%] text-gray-970 mb-3">Choose a plan that suits your needs and scale your business with Lanepact</p>
        <img src={plansImg} alt="" className="pb-20" />
      </div>
      
  

    </div>
  )
}

export default Plans
