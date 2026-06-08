import React from 'react';
import heroImg from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <section className="custom-bg bg-slate-50 lg:py-36 py-5">
        <div className="container mx-auto flex lg:flex-row flex-col-reverse justify-center items-center lg:gap-10 ">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
            <DayPicker
              mode="single" // mode will be selected according to project.
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={heroImg}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentBanner;
