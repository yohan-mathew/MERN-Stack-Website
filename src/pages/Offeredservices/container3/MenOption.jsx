import React from 'react'
import { images } from '../../../constants'

const MenOption = () => {
  return (
    <section className='container font-body'>
        <div>
            <h1 className='font-bold'>Haircut</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <img className='h-[13rem] items-start' src={images.men1} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span> Haircut</p>
                    <p><span className='lg:hidden'>-</span> Senior Haircut</p>
                    <p><span className='lg:hidden'>-</span> Child Haircut</p>
                    <p><span className='lg:hidden'>-</span> All Over Razor Haircut</p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
           
        </div>
        <div>
            <h1 className='font-bold'>Haircut with wash</h1>
            <div className='flex flex-col lg:flex-row justify-between  items-center'>
                <img className='h-[13rem]' src={images.men2} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span>Haircut with wash</p>
                    <p><span className='lg:hidden'>-</span>Haircut with Tea Tree</p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
        </div>
        <div>
            <h1 className='font-bold'>Haircut with razor edge up</h1>
            <div className='flex flex-col lg:flex-row justify-between  items-center'>
                <img className='h-[13rem]' src={images.men3} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span>Haircut with Razor edge Up</p>
                    <p><span className='lg:hidden'>-</span>Senior Razor Edge Up </p>
                    <p><span className='lg:hidden'>-</span>Child Razor Edge Up </p>
                    <p><span className='lg:hidden'>-</span>Bald Fade with Blade/Razor </p>
                    <p><span className='lg:hidden'>-</span>Head Shaving </p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
        </div>
        <div>
            <h1 className='font-bold'>Haircut with beard</h1>
            <div className='flex flex-col lg:flex-row justify-between  items-center'>
                <img className='h-[13rem]' src={images.men4} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span>With Edger </p>
                    <p><span className='lg:hidden'>-</span>With Razor </p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
        </div>
        <div>
            <h1 className='font-bold'>Beard</h1>
            <div className='flex flex-col lg:flex-row justify-between  items-center'>
                <img className='h-[13rem]' src={images.men5} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span>Beard Trim </p>
                    <p><span className='lg:hidden'>-</span>Beard Razor Clean Up </p>
                    <p><span className='lg:hidden'>-</span>Beard Hot Towel Shave </p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
        </div>
        <div>
            <h1 className='font-bold'>Facial</h1>
            <div className='flex flex-col lg:flex-row justify-between  items-center'>
                <img className='h-[13rem]' src={images.men6} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span>Black Mask </p>
                    <p><span className='lg:hidden'>-</span>Mint Scrub </p>
                    <p><span className='lg:hidden'>-</span>Cold Mask </p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
        </div>
    </section>
  )
}

export default MenOption

