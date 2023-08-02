import React from 'react'
import { images } from '../../../constants'

const WomenOption = () => {
  return (
    <section className='container font-body'>
        <div>
            <h1 className='font-bold'>Haircut wash & Blow Dry Style</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <img className='h-[13rem] items-start' src={images.women1} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span> Haircut* </p>
                    <p><span className='lg:hidden'>-</span> Additional services with iron/curler </p>
                    <p><span className='lg:hidden'>-</span> Shampoo Service only </p>
                    <p><span className='lg:hidden'>-</span> Shampoo Service & Blow Dry </p>
                    <p className=' mt-3 text-[#D32828]' > **PRICES VARY WITH LENGTH</p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
           
        </div>
        <div>
            <h1 className='font-bold'>Hair Color</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <img className='h-[13rem] items-start' src={images.women2} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span> Full Color* </p>
                    <p><span className='lg:hidden'>-</span> Retouch of 1 inch </p>
                    <p className=' mt-3 text-[#D32828]' > **PRICES VARY WITH LENGTH</p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
           
        </div>
        <div>
            <h1 className='font-bold'>Highlights</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <img className='h-[13rem] items-start' src={images.women3} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span> Partial* </p>
                    <p><span className='lg:hidden'>-</span> Full Set* </p>
                    <p><span className='lg:hidden'>-</span> Toners (additional) </p>
                    <p className=' mt-3 text-[#D32828]' > **PRICES VARY WITH LENGTH</p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
           
        </div>
        <div>
            <h1 className='font-bold'>Hair color & Highlights</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <img className='h-[13rem] items-start' src={images.women4} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span> Partial Highlights & Color* </p>
                    <p><span className='lg:hidden'>-</span> Full set Highlights & Color* </p>
                    <p className=' mt-3 text-[#D32828]' > **PRICES VARY WITH LENGTH</p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
           
        </div>
        <div>
            <h1 className='font-bold'>keratin Blow Out</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <img className='h-[13rem] items-start' src={images.women5} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span> Straightening Service </p>
                    <p><span className='lg:hidden'>-</span> Additional Ounce </p>
                    <p><span className='lg:hidden'>-</span> Botx Reconstructive Treatment </p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
           
        </div>
        <div>
            <h1 className='font-bold'>Up Do</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <img className='h-[13rem] items-start' src={images.women6} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span> General Up do* </p>
                    <p><span className='lg:hidden'>-</span> French Braid </p>
                    <p><span className='lg:hidden'>-</span> Corn rows added to Fade</p>
                    <p className=' mt-3 text-[#D32828]' > **PRICES VARY WITH LENGTH</p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
           
        </div>
        <div>
            <h1 className='font-bold'>Wax</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <img className='h-[13rem] items-start' src={images.women7} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span> Eyebrows* </p>
                    <p><span className='lg:hidden'>-</span> Lip </p>
                    <p><span className='lg:hidden'>-</span> Chin </p>
                    <p><span className='lg:hidden'>-</span> Jaw </p>
                    <p><span className='lg:hidden'>-</span> Ears </p>
                    <p><span className='lg:hidden'>-</span> Nose </p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
           
        </div>
    </section>
  )
}

export default WomenOption
