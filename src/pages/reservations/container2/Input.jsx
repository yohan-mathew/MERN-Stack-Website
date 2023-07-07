import React, { useEffect } from 'react'
import images from '../../../constants/images.js'
import { useState } from 'react'
import { getUserData } from '../../../data/user.js'

const Input = () => {

  const [user,setUser] = useState([])
  const [inputValue,setInputValue] = useState('')
  const [barberInput,setBarberInput] = useState('')

  console.log(user)
  useEffect(() => {
    (async() => {
      const userdata = await getUserData();
      setUser(userdata);
    })()
  },[])

  
  function Click() {

    const newComment={
      _id:11,
      userName: inputValue,
      userBarber: barberInput, 
      createdAt: "2022-12-31-T17:22:05.092+0000",
      
    }
    if (inputValue !==""){
      setUser((cur)=> {
        return[...cur,newComment];
      })
      setInputValue("")
      setBarberInput("")
    }
  }

const Change = event => {
  if(event.target.id == "name"){
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
      <a className='flex justify-center mt-6'>
        <img className='h-14' src={images.lineButton} alt="booknow" onClick={Click} ></img>
      </a>
      </div>
      <div className= 'm-6 p-4 bg-black text-white flex flex-col rounded-md text-center gap-y-2 lg:w-[50%] lg:mx-auto'>
        {user.map((item,index)=> (
          <p key={index} className=' bg-[#D32828] rounded-lg w-[40%] mx-auto p-2'>{item.userName}</p>))}
        
      </div>


    </form>
    
      

  )
}

export default Input
