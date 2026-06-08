import React from 'react';
import doctor from '../../assets/images/doctor.png';

const Solutions = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-left mb-16">
        <h4 className="text-accent font-bold text-xl uppercase">Get medical help</h4>
        <h2 className="text-secondary font-normal text-3xl">Just in few taps!</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 items-start lg:gap-10 gap-5 my-10 lg:my-20">
        <div>
          <h4 className="text-accent font-bold text-xl">Get medical help</h4>
          <p className="my-5">
            Get the best user experience on our App. Search for a doctor and get an instant
            consultation.
          </p>
          <p>
            You can join the online queue immediately, while you can continue doing other tasks at
            home or office.
          </p>
        </div>
        <div>
          <h4 className="text-accent font-bold text-xl">AnyTime</h4>
          <p className="my-5">
            Talk to a doctor within minutes. Our qualified network of doctors is available 24/7.
          </p>
          <p>
            You can get a consultation and prescription whenever you need. Patients and doctors can
            keep their previous consultation history and view online prescriptions.
          </p>
        </div>
        <div>
          <h4 className="text-accent font-bold text-xl">Trusted</h4>
          <p className="my-5">
            DocTime's experienced doctors, specialists and therapists are selected carefully. Safety
            and quality is at the heart of everything we do.
          </p>
          <p>
            Each doctor is certified, registered, and operates to the highest clinical standards.
            DocTime uses 256 bit encryption to secure the video consultation.
          </p>
        </div>
        <div className="rounded-full overflow-hidden bg-accent hidden lg:block">
          <img src={doctor} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
