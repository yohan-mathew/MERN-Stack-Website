import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"


import { images } from '../constants/index.js';


const Header = () => {
const [navIsvisible, setNavIsVisible] = useState(false);

const navVisibilityHandler = () => {
  setNavIsVisible((curState) => {return !curState;});
};

return (
<section>
  <header className=' mx-auto px-5 flex justify-between py-4 bg-[#D32828]'>
    <div >
    <img  className='h-16 lg:h-20 brightness-0 invert' src={images.logo} alt="" />
    </div>
    <div className=' z-50 items-center flex lg:hidden'>
      {navIsvisible ? (<AiOutlineClose className='w-6 h-6' onClick={navVisibilityHandler}/>) : ( <AiOutlineMenu className=' w-6 h-6' onClick={navVisibilityHandler}/>)}
    </div>
    <div className={` ${navIsvisible ? "right-0" : "-right-full"} transition-all duration-300 gap-y-5 z-49 flex flex-col w-full lg:w-auto justify-center lg:flex-row lg:justify-end absolute top-0 bottom-0  items-center gap-x-4 lg:static bg-gray-700 mt-[96px] lg:mt-0 lg:bg-transparent`}>
      <a href="">
          <img className=' h-14' src={images.Services} alt="cutter" />
      </a>
      <a href="">
          <img className=' h-14' src={images.button} alt="cutter" />
      </a>
    </div>
  </header>
</section>
)};

export default Header;
