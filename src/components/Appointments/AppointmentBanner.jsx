import React from 'react';
import heroImg from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <section className="custom-bg py-10 lg:py-20">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-2">
          <div className="glass-card rounded-lg p-6">
            <p className="section-kicker mb-4 text-sm">Select your visit date</p>
            <DayPicker
              mode="single" // mode will be selected according to project.
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center lg:text-left">
            <h1 className="text-4xl font-bold text-secondary lg:text-5xl">
              Find a chair time that fits your day.
            </h1>
            <p className="mt-5 max-w-xl leading-8 text-secondary/70">
              Pick a date to see live availability by treatment. Bookings are saved to your
              dashboard so payments and visit details stay in one place.
            </p>
            <img src={heroImg} alt="Dental chair" className="mt-6 max-h-80 object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentBanner;
