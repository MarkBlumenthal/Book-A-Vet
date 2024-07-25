// frontend/src/components/Chatbot.tsx
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot: React.FC = () => {
  const [step, setStep] = useState(0);
  const [appointment, setAppointment] = useState({
    petName: '',
    ownerEmail: '',
    checkupType: '',
    date: '',
    time: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    if (!appointment.petName || !appointment.ownerEmail || !appointment.checkupType || !appointment.date || !appointment.time) {
      alert('All fields are required.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/appointments', appointment);
      alert('Appointment booked successfully');
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book appointment');
    }
  };

  return (
    <div className="container">
      {step === 0 && (
        <div>
          <h2>What's your pet's name?</h2>
          <input type="text" name="petName" value={appointment.petName} onChange={handleInputChange} />
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 1 && (
        <div>
          <h2>What's your email?</h2>
          <input type="email" name="ownerEmail" value={appointment.ownerEmail} onChange={handleInputChange} />
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>What type of checkup is it?</h2>
          <input type="text" name="checkupType" value={appointment.checkupType} onChange={handleInputChange} />
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Pick a date and time</h2>
          <input type="date" name="date" value={appointment.date} onChange={handleInputChange} />
          <input type="time" name="time" value={appointment.time} onChange={handleInputChange} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;




