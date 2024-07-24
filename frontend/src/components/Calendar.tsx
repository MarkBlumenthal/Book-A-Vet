// frontend/src/components/Calendar.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Calendar: React.FC = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const res = await axios.get('http://localhost:5000/appointments', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setAppointments(res.data);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="container">
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment: any) => (
          <li key={appointment.id}>{appointment.petName} - {appointment.date} at {appointment.time}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
