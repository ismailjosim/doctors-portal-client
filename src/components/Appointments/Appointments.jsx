import React, { useState } from 'react';
import '../../styles/Custom.css';
import AppointmentAvailable from './AppointmentAvailable';
import AppointmentBanner from './AppointmentBanner';
const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

      <AppointmentAvailable selectedDate={selectedDate} />
    </div>
  );
};

export default Appointments;
