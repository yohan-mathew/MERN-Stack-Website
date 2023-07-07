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
            <button onClick={menOp} className='border border-red-950 w-[50%]'>Men</button>
            <button onClick={womenOp} className='border border-red-950 w-[50%]'>Women</button> 
          </div>
          <div>
            {option ? <MenOption/> : <WomenOption/> }
          </div>
        </section>
        
    </MainLayout>

  )
}

export default Mwservices
