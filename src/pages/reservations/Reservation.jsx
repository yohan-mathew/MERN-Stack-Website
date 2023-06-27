import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container2/Hero'
import Input from './container2/Input.jsx'
import Line from './container2/Line'



const Reservation = () => {
  return (
    <MainLayout>
        <section>
          <Hero />
          <Input/>
          <Line/>
        </section>
    </MainLayout>
    
  )
}

export default Reservation
