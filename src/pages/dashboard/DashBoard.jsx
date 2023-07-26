import React, { useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useMutation } from '@tanstack/react-query';
import { adminauth, line } from '../../services/index/users';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {

  const [user,setUser] = useState([])

  const navigate = useNavigate();
  const { mutate: verify } = useMutation({
    mutationFn: async () => {
      await adminauth();
    },onSuccess: () => {
      toast.success("Welcome")
    },onError:(error) =>{
      navigate('/login')
      toast.error(error.message)
    }
  });


  const {mutate:curline} = useMutation({
    mutationFn: () => {
      
      return line();
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
  
  return (
    <MainLayout>
      <section className=' bg-black text-white font-body'>
        <div className='flex justify-center'>
          <h1> Current List</h1>
        </div>
        <div className=' grid grid-cols-4 text-center text-lg'> 
          <h1>Name</h1>
          <h1>Barber</h1>
          <h1>Time Reserved</h1>
          <h1>Done Cutting?</h1>
        </div>
        <div className= 'flex flex-col'>
          {user.map((item,index)=> (
            <div className=' grid grid-cols-4'>
            <div key={index} className=' bg-[#D32828] rounded-lg w-[90%] mx-auto p-2  pl-10 pr-10 flex justify-between mb-3 col-span-3'>
              <p>{item.name}</p>
              <p>{item.barber}</p>
              <p>{formatTime(item.time)}</p>
            </div>
            <button className='bg-[#D32828] rounded-lg  mb-3'>remove</button>
            </div>
            ))}
           
      </div> 
      </section>
    </MainLayout>
  );
};

const formatTime = (timeString) => {
  const date = new Date(timeString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export default DashBoard;