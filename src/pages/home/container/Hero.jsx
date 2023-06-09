import React from 'react'
import { images } from '../../../constants/index.js';

const Hero = () => {
  return (
<section className=''>
    <div className='flex flex-row justify-between items-center'>
        <div className=' hidden md:flex'>
            <img src={images.mensTop} className='h-auto max-w-full ' alt="" />
        </div>
        <div>
            <img src={images.logo2}/>
        </div>
        <div className=' hidden md:flex' >
            <img src={images.womensTop} className=' h-auto max-w-full' alt="" />
        </div>
    </div>

    <h2 className='flex justify-center font-body text-[1.2rem] sm:text-[2rem] lg:text-[3rem]'>
    cutting with<span className=' ml-1 text-[#D32828]'>love</span>, styling with <span className=' ml-1 text-[#D32828]'>passion</span>
    </h2>

    <div className=' md:hidden flex items-center justify-between'>
        <div>
            <img src={images.mensTop} className=' h-auto max-w-full ' alt="" />
        </div>
        <div >
            <img src={images.womensTop} className=' h-auto max-w-full' alt="" />
        </div>
    </div>
    <div className=' mt-5 flex justify-center'>
        <img src={images.arrow} className='h-10 md:h-16 lg:h-auto' alt=""/>
    </div>


</section>
  )
}

export default Hero
