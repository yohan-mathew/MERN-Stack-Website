import React from 'react'
import { images } from '../constants/index.js';
import {FiInstagram, FiTwitter} from "react-icons/fi"

const Footer = () => {

  const times = [
    { day: "Monday", time: "10 AM - 7 PM" },
    { day: "Tuesday", time: "10 AM - 5 PM" },
    { day: "Wednesday", time: "10 AM - 7 PM" },
    { day: "Thursday", time: "9 AM - 7 PM" },
    { day: "Friday", time: "9 AM - 7 PM" },
    { day: "Saturday", time: "9 AM - 5 PM" },
    { day: "Sunday", time: "Closed" }
  ];
  const TimesList = () => {
    return (
      <div className="max-w-[20rem] mx-auto">
        {times.map((item) => (
          <div className="flex justify-between " key={item.day}>
            <p className="text-white text-[1.5rem]">{item.day}</p>
            <p className="text-white text-[1.5rem]">{item.time}</p>
          </div>
        ))}
      </div>
    );
  };
  return (
<section className='bg-[#D32828]  mb-0' >
    <footer className=' container mx-auto flex flex-col gap-y-5'>
    <div className='mx-auto md:hidden'>
            <img className='h-[20rem] ' src={images.logo2}/>
    </div>
    <div className='md:flex md:justify-between'>
      <div>
        <div>
          <h1 className=' text-center font-header text-[2rem]'>Location</h1>
          <p className=' text-center text-white font-sans text-[1.5rem]'>5623 Garth Rd <br></br> Suite 140 <br></br> Baytown,TX 77521</p>
        </div>
        <div>
          <h1 className=' text-center font-header text-[2rem]'>Contact us</h1>
          <p className=' text-center text-white font-sans text-[1.5rem]'>(346) 263-9272</p>
        </div>
        <div>
          <a>login</a>  
        </div>
      </div>
      <div className='mx-auto hidden md:block'>
            <img className='h-[20rem]' src={images.logo2}/>
            <div className='flex justify-center gap-x-11'>
              <FiInstagram className='h-10 w-10'/>
              <FiTwitter className='h-10 w-10'/>
            </div>
      </div>
        <div>
          <h1 className=' text-center font-header text-[2rem]'>Hours</h1>
          <TimesList />  
        </div>
        <div className='flex justify-center gap-x-9 md:hidden mb-5 mt-3'>
              <FiInstagram className='h-10 w-10'/>
              <FiTwitter className='h-10 w-10'/>
        </div>
    </div>

    


    </footer>
  </section>
  )
}

export default Footer
