import React from 'react'
import { images } from '../../../constants/index.js';

const Hero = () => {
  return (
<section className=' bg-dark'>
    <div className='flex justify-center'>
        <img  src={images.logo2}/>
    </div>
    <h2 className='flex justify-center font-body text-[1.2rem] sm:text-[2rem] lg:text-[3rem]'>
    cutting with<span className=' ml-1 text-[#D32828]'>love</span>, styling with <span className=' ml-1 text-[#D32828]'>passion</span>
    </h2>
    <div className=' flex items-center justify-between m-5'>
        <div>
            <img src={images.mensTop} className=' h-auto max-w-full ' alt="" />
        </div>
        <div >
            <img src={images.womensTop} className=' h-auto max-w-full' alt="" />
        </div>
    </div>
    <div>
        arrow
    </div>
</section>
  )
}

export default Hero
