import React, { useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useMutation } from '@tanstack/react-query';
import { adminauth, deleteUser, line, addBarber } from '../../services/index/users';
import { useEffect } from 'react';
import { toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DashBoard = ({info}) => {
  info.on("new_user", () => {
    window.location.reload();
  })

  const [user,setUser] = useState([])
  const [barber,setBarber] = useState([])

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

  
  const { mutate: removeUser } = useMutation({
    mutationFn: async (x) => {
      await deleteUser(x);
    },onSuccess: () => {
      toast.success("removed")
    }
  });


  const {mutate:curline} = useMutation({
    mutationFn:async () => {
      
      return line();
    }, onSuccess: (data) => {
      console.log(data)
      setUser(data);
      
    }
  })

  useEffect(() => {
    (async() => {
      verify()
      curline()
      
    })()
  },[verify,curline])

  const printtheuser = async (x) =>{
    removeUser(x)
    curline()
    info.emit("added_new", "removed user")
  }

  const Change = event => {
    if(event.target.id === "barber"){
      setBarber(event.target.value)
    }
  
  }
  
  return (
    
    <MainLayout>
      <section className=' bg-black text-white font-body min-h-screen'>
        <div className='border border-white flex flex-col justify-center h-[300px]'>
          <form className='flex flex-col justify-center items-center' >
              <label className='m-2'>barbers on clock</label> 
              <input 
                id = 'barber'
                type = "text"
                value = {barber}
                placeholder='Enter a barber'
                onChange={Change}/>
              <button className='border px-4 m-2' >add</button> 
          </form>
          <div>
            <label>Barbers working today:</label>
            {/* stopped here need to make the dynamic barber fetch, added the route tho*/}
          </div>
          
        </div>

        <div className='flex justify-center'>       
          <table class="table-auto border border-slate-500">
            <caption>current Line</caption>
            <thead>
              <tr  class=" bg-gray-500" >
                <th className=' px-8'>Name</th>
                <th class="px-8"> barber</th>
                <th class="px-8">services</th>
                <th class="px-8">Booking time</th>
                <th class="px-8">ETA</th>
                <th class="px-8">Done cutting?</th>
              </tr>
            </thead>
            <tbody>
            {user.map((item,index)=> (
                      
                      <tr className='border border-separate' key={item.id}>
                        <td class="px-8 py-5 border border-separate">{item.name}</td>
                        <td class="px-8 border border-separate">{item.barber}</td>
                        <td class="px-8 border border-separate">{item.service}</td>
                        <td class="px-8 border border-separate">{formatTime(item.time)}</td>
                        <td class="px-8 border border-separate">{item.arrivalTime}</td>
                        <td><button className='flex justify-center bg-[#D32828] rounded-lg w-[90%] mx-auto items-center'>remove</button></td>
                      </tr>
                      ))}

              </tbody>
            </table>
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
