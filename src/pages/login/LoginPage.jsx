import React from 'react'
import { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import images from '../../constants/images.js'
import  toast  from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { signin } from '../../services/index/users'

const LoginPage = () => {

  const [usernameValue,setUsernameValue] = useState('')
  const [passInput,setPassInput] = useState('')

  const { mutate: signinfun } = useMutation({
    mutationFn: ({ email,password }) => {
      return signin({email, password});
    },onSuccess: () => {
      toast.success("Welcome")
    },onError:(error) =>{
      toast.error(error.message)
    }
  });

  const Change = event => {
    if(event.target.id === "name"){
      setUsernameValue(event.target.value)
    }
    else{
      setPassInput(event.target.value)
    }
  }
  function Click() {


    signinfun({email: usernameValue, password: passInput})
  }




  return (
<MainLayout>
  <section className=' bg-black min-h-screen flex flex-col justify-center'>
    <h1 className=' mb-10 text-5xl flex justify-center font-body text-white'>Login page</h1>
    <form>
    <div className="container w-[50%] flex flex-col mx-auto">
      <label htmlFor="name" className="mb-1 font-header text-white">
        Username:
      </label>
      <input
        id="name"
        type="text"
        value={usernameValue}
        placeholder="click to enter Username"
        onChange={Change}
        className="border border-gray-300 rounded px-3 py-2 mb-1 text-center font-body "
      />
      <label htmlFor="name" className="mb-1 font-header text-white">
        Password:
      </label>
      <input
        id="specalist"
        type="text"
        value={passInput}
        onChange={Change}
        placeholder='click to enter password '
        className="border border-gray-300 rounded px-3 py-2 mb-1 text-center font-body text-md"
      />
      <a className='flex justify-center mt-6'>
        <img className='h-14' src={images.loginButton} alt="booknow" onClick={Click} ></img>
      </a>
      </div>
    </form>
  </section>
</MainLayout>
  )
}

export default LoginPage
