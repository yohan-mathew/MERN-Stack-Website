import React, { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import MenOption from './container3/MenOption'
import WomenOption from './container3/WomenOption'


const Mwservices = () => {

const [option,setOption] =useState(true)

const menOp = () =>{
  setOption(true)
}
const womenOp = () =>{
  setOption(false)
}

  return (
    <MainLayout>
        <section>
          <div className='flex justify-center mt-3 ml-[10%] mr-[10%]'>
            <button onClick={menOp} className={`${option ? "bg-[#D32828]" : "bg-black" }  w-[50%] text-white `}>Men</button>
            <button onClick={womenOp} className={`${option ? "bg-black" : "bg-[#D32828]" }  w-[50%]  text-white `}>Women</button> 
          </div>
          <div className='mt-3 ml-[15%] mr-[15%]'>
            {option ? <MenOption/> : <WomenOption/> }
          </div>
        </section>
        
    </MainLayout>

  )
}

export default Mwservices
