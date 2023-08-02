import React from 'react'
import { images } from '../constants/index.js';
import {FiInstagram, FiFacebook} from "react-icons/fi"
import {RiAdminFill }from "react-icons/ri"
import { Link } from 'react-router-dom';

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
            <img className='h-[20rem] ' src={images.logo2} alt="logo"/>
    </div>
    <div className='md:flex md:justify-between'>
      <div>
        <div>
          <h1 className=' text-center font-header text-[2rem]'>Location</h1>
          <p className=' text-center text-white font-sans text-[1.5rem]'>5010 Garth Rd <br></br> Suite 108 <br></br> Baytown,TX 77521</p>
        </div>
        <div>
          <h1 className=' text-center font-header text-[2rem]'>Contact us</h1>
          <p className=' text-center text-white font-sans text-[1.5rem]'>(346) 263-9272</p>
        </div>
      </div>
      <div className='mx-auto hidden md:block'>
            <img className='h-[20rem]' src={images.logo2} alt="logo"/>
            <div className='flex justify-center gap-x-11'>
            <Link to ="https://instagram.com/lovetocut_?igshid=YmMyMTA2M2Y="><FiInstagram className='h-10 w-10'/></Link>
            <Link to ="https://www.facebook.com/lovetocut2018?mibextid=LQQJ4d"> <FiFacebook className='h-10 w-10'/></Link>
            <Link to ="/login"><RiAdminFill className='h-10 w-10'/></Link>
            </div>
      </div>
        <div>
          <h1 className=' text-center font-header text-[2rem]'>Hours</h1>
          <TimesList />  
        </div>
        <div className='flex justify-center gap-x-9 md:hidden mb-5 mt-3'>
              <Link to ="https://instagram.com/lovetocut_?igshid=YmMyMTA2M2Y="><FiInstagram className='h-10 w-10'/></Link>
              <Link to ="https://www.facebook.com/lovetocut2018?mibextid=LQQJ4d"><FiFacebook className='h-10 w-10'/></Link>
              
        </div>
    </div>

    


    </footer>
  </section>
  )
}

export default Footer
