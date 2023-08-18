import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container2/Hero'
import Input from './container2/Input.jsx'




const Reservation = ({info}) => {
  info.on("new_user", () => {
    window.location.reload();
  })
  return (
    <MainLayout>
        <section>
          <Hero />
          <Input childFunc={info}/>         
        </section>
    </MainLayout>
    
  )
}

export default Reservation
