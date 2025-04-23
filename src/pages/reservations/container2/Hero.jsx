import React from 'react';
import images from '../../../constants/images.js';

const Hero = ({ users = [] }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4">
      <h2 className="font-body text-[1rem] sm:text-[2rem] lg:text-[3rem]">
        Experience Our Premium Salon Services With Ease
      </h2>

      <img className="h-auto max-w-[50%] my-4" src={images.chair} alt="chair" />

      <h2 className="text-red-500 font-body text-[1rem] sm:text-[2rem] lg:text-[3rem]">
        Although We Don't Follow Strict Appointment Times, Your Reservation Ensures a Smooth and Enjoyable Visit, Catered Specifically to You.
      </h2>

      {users.length > 0 && (
        <div className="mt-6 w-full max-w-md bg-black text-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2 text-[#D32828]">Current Queue</h3>
          {users.map((user, index) => (
            <div key={index} className="flex justify-between px-4 py-1 border-b border-gray-600">
              <span>{index + 1}.</span>
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
