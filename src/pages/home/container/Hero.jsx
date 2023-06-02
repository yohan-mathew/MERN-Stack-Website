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
    <div className=' mt-20 flex flex-col items-center mx-5'>
        <h2 className='font-body text-[1.8rem] sm:text-[4rem] lg:text-[5rem]'>
        Welcome to love to cut
        </h2>
        <div className='lg:flex lg:flex-row gap-x-10 items-center'>
            <img src={images.prop1} className='my-5 h-auto max-w-full' alt="" />
            <p className=' font-header text-center my-5 lg:text-[3rem]'>We combine passion and expertise to deliver exceptional hair services. 
                We started five years ago in the industry with a highly skilled team
                 ensures that you'll receive top-notch service in a warm and inviting
                  atmosphere.
            </p>
        </div>
        <h2 className='font-body text-[1.8rem] sm:text-[4rem] lg:text-[5rem]'>
        Your hair. Your Style. Perfected.
        </h2>
        <div className='lg:flex lg:flex-row gap-x-10 items-center'>
            <p className=' font-header text-center my-5 lg:text-[3rem]'>We combine passion and expertise to deliver exceptional hair services. 
                We started five years ago in the industry with a highly skilled team
                 ensures that you'll receive top-notch service in a warm and inviting
                  atmosphere.
            </p>
            <img src={images.prop1} className='my-5 h-auto max-w-full' alt="" />
        </div>
        <h2 className='font-body text-[1.8rem] sm:text-[4rem] lg:text-[5rem]'>
        Our services
        </h2>
    </div>


</section>
  )
}

export default Hero
