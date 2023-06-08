import React from 'react'
import images from '../../../constants/images.js'

const Services = () => {
  return (
<section className=' mx-auto container flex flex-col gap-y-3'>
    <div className=' flex flex-row justify-between'>
        <img src={images.cutting} className=' h-auto max-w-full' alt="" />
        <img src={images.styling} className=' h-auto max-w-full' alt="" />
    </div>
    <div className=' flex flex-row justify-between'>
        <img src={images.cutting} className=' h-auto max-w-full' alt="" />
        <img src={images.styling} className=' h-auto max-w-full' alt="" />
    </div>

</section>
  )
}

export default Services
