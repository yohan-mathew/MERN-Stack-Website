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
                    <p><span className='lg:hidden'>-</span> Haircut* (35)</p>
                    <p><span className='lg:hidden'>-</span> Additional services with iron/curler (10)</p>
                    <p><span className='lg:hidden'>-</span> Shampoo Service only (12)</p>
                    <p><span className='lg:hidden'>-</span> Shampoo Service & Blow Dry (25)</p>
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
                    <p><span className='lg:hidden'>-</span> Full Color* (65)</p>
                    <p><span className='lg:hidden'>-</span> Retouch of 1 inch (50)</p>
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
                    <p><span className='lg:hidden'>-</span> Partial* (110)</p>
                    <p><span className='lg:hidden'>-</span> Full Set* (150)</p>
                    <p><span className='lg:hidden'>-</span> Toners (additional) (40)</p>
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
                    <p><span className='lg:hidden'>-</span> Partial Highlights & Color* (135)</p>
                    <p><span className='lg:hidden'>-</span> Full set Highlights & Color* (165)</p>
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
                    <p><span className='lg:hidden'>-</span> Straightening Service (200)</p>
                    <p><span className='lg:hidden'>-</span> Additional Ounce (100)</p>
                    <p><span className='lg:hidden'>-</span> Botx Reconstructive Treatment (60)</p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
           
        </div>
        <div>
            <h1 className='font-bold'>Up Do</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <img className='h-[13rem] items-start' src={images.women6} alt='haircut'/>
                <div className='flex flex-col lg:items-end lg:text-xl mt-3'>
                    <p><span className='lg:hidden'>-</span> General Up do* (45)</p>
                    <p><span className='lg:hidden'>-</span> French Braid (15)</p>
                    <p><span className='lg:hidden'>-</span> Corn rows added to Fade(35)</p>
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
                    <p><span className='lg:hidden'>-</span> Eyebrows* (16)</p>
                    <p><span className='lg:hidden'>-</span> Lip (10)</p>
                    <p><span className='lg:hidden'>-</span> Chin (10)</p>
                    <p><span className='lg:hidden'>-</span> Jaw (12)</p>
                    <p><span className='lg:hidden'>-</span> Ears (5)</p>
                    <p><span className='lg:hidden'>-</span> Nose(5)</p>
                </div>
                
            </div>
            <img className='m-2' src={images.line2} alt='line'/>
           
        </div>
    </section>
  )
}

export default WomenOption
