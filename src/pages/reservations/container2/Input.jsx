import React from 'react'
import images from '../../../constants/images.js'

const Input = () => {
  return (
    <div className="container w-[50%] flex flex-col m-4 mx-auto">
      <label htmlFor="name" className="mb-1 font-header">
        Name:
      </label>
      <input
        id="name"
        type="text"
        placeholder='Click to Enter Name'
        className="border border-gray-300 rounded px-3 py-2 mb-1 text-center font-body "
      />
      <label htmlFor="name" className="mb-1 font-header">
        Hair Specalist:
      </label>
      <input
        id="specalist"
        type="text"
        placeholder='Your Preferred Specialist '
        className="border border-gray-300 rounded px-3 py-2 mb-1 text-center font-body text-md"
      />
      <a href="" className='flex justify-center mt-6'>
        <img className='h-14' src={images.lineButton} alt="booknow"></img>
      </a>
    </div>
  )
}

export default Input
