import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import ButtonStarted from '../Shared/ButtonStarted';

const HomeAppointment = () => {
  return (
    <section className="appointment-custom-bg my-20">
      <div className="page-shell flex justify-center text-white">
        <div className="-mt-40 lg:block hidden">
          <img src={doctor} alt="" />
        </div>
        <div className="flex flex-col justify-center py-12 lg:max-w-xl">
          <h4 className="font-bold text-accent">Appointment</h4>
          <h2 className="text-3xl font-bold sm:text-4xl">Make an appointment today</h2>
          <p className="my-5 text-base leading-8 text-white/80">
            Choose a date, see real available chair times, and reserve the visit that works for
            you. We will keep your booking organized in the dashboard.
          </p>
          <div>
            <ButtonStarted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAppointment;
