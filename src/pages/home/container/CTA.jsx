import React from 'react'
import { images } from '../../../constants'

const CTA = () => {
  return (
    <section className='p-4 bg-gray-500 h-auto mt-6'>
        <div className='container flex-col sm:flex-row mx-auto '>
            <h1 className=' text-center font-body text-[2rem] md:text-[3rem] xl:text-[3rem] text-white'>TIME FOR A CHANGE?</h1>
            <div className='flex items-center justify-center gap-x-5 mt-3'>
                <a href="">
                <img className=' h-[2.5rem] md:h-[4rem]' src={images.button} alt="cutter" />
                </a>
                <a href="">
                <img className=' h-[2.5rem] md:h-[4rem]' src={images.Services} alt="cutter" />
                </a>
            </div>
        </div>

    </section>
  )
}

export default CTA
