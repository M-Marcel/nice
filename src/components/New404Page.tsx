import React from 'react'
import boxImg from '../assets/404-Frame.png'
import Button from './Button'

const New404Page = () => {
  return (
    <div className=" w-full place-items-center mb-20 ">
      <img className='mr-10' src={boxImg} alt="" />
      <div className=" ml-18 ">
        <h1 className="font-extrabold pl-16  ">404</h1>
        <p className='text-xs w-[65%] text-center  text-gray-930 '>The page you were looking for does not exist</p>
        <button className='text-xs ml-14 border border-gray-100 rounded-xl px-3 py-2 mt-2  '>Retry</button>
      </div>
    </div>
  )
}

export default New404Page

