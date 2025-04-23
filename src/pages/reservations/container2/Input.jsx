import React, { useState } from 'react';
import images from '../../../constants/images.js';
import { useMutation } from '@tanstack/react-query';
import { signup } from '../../../services/index/users.js';
import toast from 'react-hot-toast';

const Input = ({ socket, onReservationAdded, users = [] }) => {
  const [inputValue, setInputValue] = useState('');
  const [barberInput, setBarberInput] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const [selectedOption, setSelectedOption] = useState('Haircut');

  const dropdownOptions = [
    'Haircut',
    'Haircut & beard',
    'Haircut & wash',
    'Haircut & wash Styles',
    'Color Service',
  ];

  const { mutate: signupfun } = useMutation({
    mutationFn: ({ name, barber, arrivalTime, service }) => {
      return signup({ name, barber, arrivalTime, service });
    },
    onSuccess: () => {
      toast.success("Seat reserved");
      socket.emit("added_new", "added new user");
      onReservationAdded?.();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleClick = () => {
    if (!inputValue || !barberInput || !timeInput) {
      toast.error("Please fill in all fields.");
      return;
    }

    signupfun({
      name: inputValue,
      barber: barberInput,
      arrivalTime: timeInput,
      service: selectedOption,
    });

    setInputValue('');
    setBarberInput('');
    setTimeInput('');
    setSelectedOption('Haircut');
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === 'name') setInputValue(value);
    else if (id === 'arrivalTime') setTimeInput(value);
    else setBarberInput(value);
  };

  return (
    <form>
      <div className="container w-[50%] flex flex-col m-4 mx-auto">
        <label htmlFor="name" className="mb-1 font-header">Name:</label>
        <input
          id="name"
          type="text"
          value={inputValue}
          placeholder="Enter your Name"
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 mb-1 text-center font-body"
        />

        <label htmlFor="specalist" className="mb-1 font-header">Hair Specialist:</label>
        <input
          id="specalist"
          type="text"
          value={barberInput}
          onChange={handleChange}
          placeholder="Your Preferred Specialist"
          className="border border-gray-300 rounded px-3 py-2 mb-1 text-center font-body"
        />

        <label htmlFor="arrivalTime" className="mb-1 font-header">Estimated Time of Arrival:</label>
        <input
          id="arrivalTime"
          type="text"
          value={timeInput}
          onChange={handleChange}
          placeholder="ETA..."
          className="border border-gray-300 rounded px-3 py-2 mb-1 text-center font-body"
        />

        <label htmlFor="service" className="mb-1 font-header">Service Type:</label>
        <select
          id="service"
          value={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-center font-body"
        >
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <img
            className="h-14 cursor-pointer"
            src={images.lineButton}
            alt="book now"
            onClick={handleClick}
          />
        </div>
      </div>

      {/* Queue List Below the Button */}
      <div className='m-6 p-4 bg-black text-white flex flex-col rounded-md text-center gap-y-2 lg:w-[50%] lg:mx-auto'>
        <h1 className='font-body text-[20px] text-[#D32828]'>Current Line</h1>
        {users.length > 0 ? users.map((item, index) => (
          <div key={index} className='flex flex-row justify-center items-center'>
            <p className='px-3'>{index + 1}.</p>
            <p className='bg-[#D32828] rounded-lg w-[40%] p-2'>
              {item.name}
            </p>
          </div>
        )) : (
          <p className='italic text-gray-400'>No one in line yet.</p>
        )}
        <h1 className='font-body text-[20px]'>
          Join the line for swift and personalized service
        </h1>
      </div>
    </form>
  );
};

export default Input;
