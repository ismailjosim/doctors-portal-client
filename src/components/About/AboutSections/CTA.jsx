import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="w-full cta_bg">
      <div className="w-full flex flex-col items-center justify-between py-10 lg:py-24">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-white bg-opacity-10 px-4 py-2 rounded-xl flex items-center justify-center space-x-2 lg:space-x-4">
            <span className="text-3xl lg:text-3xl xl:text-6xl font-bold uppercase lg:mb-5">
              $49.99
            </span>
          </div>
          <div className="text-center">
            <h3 className="text-3xl lg:text-5xl md:text-4xl text-white font-semibold mx-20">
              Cleaning, Exam & Digital X-Rays
            </h3>
            <Link
              to="/appointment"
              className="btn btn-primary text-white bg-gradient-to-r from-primary to-accent lg:my-10 my-5"
            >
              Make An Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
