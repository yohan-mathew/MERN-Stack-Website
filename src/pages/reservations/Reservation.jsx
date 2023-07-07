import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container2/Hero'
import Input from './container2/Input.jsx'




const Reservation = () => {
  return (
    <MainLayout>
        <section>
          <Hero />
          <Input/>         
        </section>
    </MainLayout>
    
  )
}

export default Reservation
