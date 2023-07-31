import React, { useEffect } from 'react'
import images from '../../../constants/images.js'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { signup,line } from '../../../services/index/users.js'
import  toast  from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'


const Input = () => {

  const [user,setUser] = useState([])
  const [inputValue,setInputValue] = useState('')
  const [barberInput,setBarberInput] = useState('')

  const { mutate: signupfun } = useMutation({
    mutationFn: ({ name, barber }) => {
      return signup({ name, barber });
    },onSuccess: () => {
      toast.success("seat reserved")
    },onError:(error) =>{
      toast.error(error.message)
    }
  });


  const {mutate:curline} = useMutation({
    mutationFn: async () => {
      
      return await line();
    }, onSuccess: (data) => {
      console.log(data)
      setUser(data);
      
    }
  })

  useEffect(() => {
    (async() => {
      curline()
      
    })()
  },[])

  
  async function Click() {

    signupfun({name: inputValue,barber: barberInput})
   
    setInputValue("")
    setBarberInput("")

    await curline()
    
    
  }

const Change = event => {
  if(event.target.id === "name"){
    setInputValue(event.target.value)
  }
  else{
    setBarberInput(event.target.value)
  }



 
}
  return (
    <form>
      <div className="container w-[50%] flex flex-col m-4 mx-auto">
      <label htmlFor="name" className="mb-1 font-header">
        Name:
      </label>
      <input
        id="name"
        type="text"
        value={inputValue}
        placeholder="Enter your Name"
        onChange={Change}
        className="border border-gray-300 rounded px-3 py-2 mb-1 text-center font-body "
      />
      <label htmlFor="name" className="mb-1 font-header">
        Hair Specalist:
      </label>
      <input
        id="specalist"
        type="text"
        value={barberInput}
        onChange={Change}
        placeholder='Your Preferred Specialist '
        className="border border-gray-300 rounded px-3 py-2 mb-1 text-center font-body text-md"
      />
      <a className='flex justify-center mt-6' href="#">
        <img className='h-14' src={images.lineButton} alt="booknow" onClick={Click} ></img>
      </a>
      </div>
      <div className= 'm-6 p-4 bg-black text-white flex flex-col rounded-md text-center gap-y-2 lg:w-[50%] lg:mx-auto'>
        <h1 className=' font-body text-[20px] text-[#D32828]'>Current line</h1>
        {user.map((item,index)=> (
          <p key={index} className=' bg-[#D32828] rounded-lg w-[40%] mx-auto p-2'>{item.name}</p>))}
        <h1 className=' font-body text-[20px]'>Join the line for swift and personalized service</h1>
      </div>
      <Toaster />


    </form>
  )
}


    
      

  


export default Input
