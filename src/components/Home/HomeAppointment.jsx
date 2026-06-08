import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import ButtonStarted from '../Shared/ButtonStarted';

const HomeAppointment = () => {
  return (
    <section className="appointment-custom-bg bg-slate-200 lg:my-40 my-20">
      <div className="w-11/12 mx-auto flex justify-center text-white">
        <div className="-mt-40 lg:block hidden">
          <img src={doctor} alt="" />
        </div>
        <div className="flex flex-col justify-center lg:max-w-md xl:max-w-lg py-8">
          <h4 className="text-primary font-bold text-xl">Appointment</h4>
          <h2 className="text-2xl font-bold sm:text-3xl">Make an appointment Today</h2>
          <p className="text-base leading-6 my-5 lg:text-justify">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum that it has a
            more-or-less normal distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web
            page
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
