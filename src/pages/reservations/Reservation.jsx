import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from './container2/Hero';
import Input from './container2/Input.jsx';

const Reservation = ({ info }) => {
  const [usersInLine, setUsersInLine] = useState([]);

  const fetchQueue = async () => {
    try {
      const response = await fetch("/api/users/reserve"); // ✅ correct path
      const data = await response.json();
      console.log("Fetched queue:", data);
      setUsersInLine(data);
    } catch (error) {
      console.error("Error fetching queue:", error);
    }
  };

  // Fetch initial list
  useEffect(() => {
    fetchQueue();
  }, []);

  // Listen for "new_user" and re-fetch
  useEffect(() => {
    info.on("new_user", fetchQueue);
    return () => {
      info.off("new_user", fetchQueue);
    };
  }, [info]);

  return (
    <MainLayout>
      <section>
        <Hero/>
        <Input
  socket={info}
  onReservationAdded={fetchQueue}
  users={usersInLine}
/>
      </section>
    </MainLayout>
  );
};

export default Reservation;