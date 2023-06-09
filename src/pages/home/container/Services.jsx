import React from 'react'
import images from '../../../constants/images.js'

const Services = () => {
  return (
<section className=' px-5 mx-auto container flex flex-col py-10 lg:gap-y-3 gap-x-4'>
    
    <h2 className='text-center font-body text-[1.8rem] sm:text-[4rem] lg:text-[5rem]'>
        Our services
    </h2>
    <div className=' flex flex-col gap-y-10 lg:flex-row lg:justify-between'>
        <img src={images.cutting} className=' h-auto max-w-full lg:w-[50%]' alt="" />
        <img src={images.styling} className=' h-auto max-w-full lg:w-[50%]' alt="" />
    </div>
    <div className=' flex flex-col gap-y-10 lg:flex-row lg:justify-between'>
        <img src={images.cutting} className=' h-auto max-w-full lg:w-[50%] ' alt="" />
        <img src={images.styling} className=' h-auto max-w-full lg:w-[50%] ' alt="" />
    </div>

</section>
  )
}

export default Services
