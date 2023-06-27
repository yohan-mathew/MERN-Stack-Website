import React from 'react'
import images from '../../../constants/images.js'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className=' font-body text-[1rem] sm:text-[2rem] lg:text-[3rem]'>Experience Our Premium Salon Services With Ease</h2>
        <img className=' h-auto max-w-[50%]' src={images.chair} alt='chair'></img>
        <h2 className=' text-red-500 text-center font-body text-[1rem] sm:text-[2rem] lg:text-[3rem]'> Although We Don't Follow Strict Appointment Times, Your Reservation Ensures a Smooth and Enjoyable Visit, Catered Specifically to You.</h2>
        
    </div>
  )
}

export default Hero
