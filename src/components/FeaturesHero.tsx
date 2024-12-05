import React from 'react'
import Header from "../components/Header"


const FeaturesHero = () => {
  return (

    <div className='featureHero   '>
        
      <Header openSignUpModal={function (): void {
                throw new Error("Function not implemented.")
            } } openLoginModal={function (): void {
                throw new Error("Function not implemented.")
            } } />


    </div>


  )
}

export default FeaturesHero
