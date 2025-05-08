import React, { useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useMutation } from '@tanstack/react-query';
import { adminauth, deleteUser, line, addBarber, fetchBarbers, deleteBarber } from '../../services/index/users';
import { useEffect } from 'react';
import { toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DashBoard = ({info}) => {
  info.on("new_user", () => {
    window.location.reload();
  })

  const [user,setUser] = useState([])
  const [barber,setBarber] = useState("")
  const [barbersToday, setBarbersToday] = useState([]);

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

  const { mutate: removeBarber } = useMutation({
    mutationFn: async (id) => {
      await deleteBarber(id);
    },
    onSuccess: async () => {
      toast.success("Barber removed");
      const updated = await fetchBarbers();
      setBarbersToday(updated);
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
    (async () => {
      verify();
      curline();
      const fetchedBarbers = await fetchBarbers();  // ✅ Fetch
      setBarbersToday(fetchedBarbers);               // ✅ Update state
    })();
  }, [verify, curline]);

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

  const handleAddBarber = async () => {
    if (barber.trim() === "") {
      toast.error("Please enter a barber name");
      return;
    }
    try {
      await addBarber(barber);           // ✅ Add barber
      toast.success("Barber added");
      setBarber("");                     // Clear input
  
      const updatedBarbers = await fetchBarbers(); // ✅ Fetch updated list
      setBarbersToday(updatedBarbers);             // ✅ Update
    } catch (error) {
      toast.error(error.message);
    }
  };
  
  return (
    
    <MainLayout>
          <section className="bg-black text-white font-body min-h-screen flex flex-col items-center gap-8 pt-10">
            <div className="w-[90%] max-w-4xl border border-white rounded-lg p-6 bg-[#1a1a1a] shadow-lg">
              <h2 className="text-xl mb-4 text-center font-semibold">Barbers on Clock</h2>

              {/* Form */}
              <form className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
                <input
                  className="text-black px-3 py-2 rounded w-full sm:w-auto"
                  id="barber"
                  type="text"
                  value={barber}
                  placeholder="Enter a barber"
                  onChange={Change}
                />
                <button
                  type="button"
                  className="bg-white text-black px-5 py-2 rounded hover:bg-gray-200"
                  onClick={handleAddBarber}
                >
                  Add
                </button>
              </form>

              {/* Barber Table */}
              <div className="overflow-x-auto">
                <table className="table-auto border border-slate-500 w-full">
                  <caption className="caption-top text-lg mb-2">Barbers Working Today</caption>
                  <thead>
                    <tr className="bg-gray-500 text-white">
                      <th className="px-4 py-2">Barber Name</th>
                      <th className="px-4 py-2">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {barbersToday.map((barber) => (
                      <tr key={barber._id} className="border border-separate text-center">
                        <td className="px-4 py-2 border border-slate-600">{barber.name}</td>
                        <td className="px-4 py-2 border border-slate-600">
                          <button
                            onClick={() => removeBarber(barber._id)}
                            className="bg-[#D32828] rounded-lg px-4 py-1 text-white hover:bg-red-700"
                          >
                            remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                        <td>
                            <button 
                              onClick={() => printtheuser(item.id)} // or item.id depending on your schema
                              className='flex justify-center bg-[#D32828] rounded-lg w-[90%] mx-auto items-center'
                            >
                              remove
                            </button>
                        </td>
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
