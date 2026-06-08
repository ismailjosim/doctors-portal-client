import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/about/image-42.jpg';
import SectionHeading from '../../Shared/SectionHeading';

const History = () => {
  const heading = {
    primary: 'New smiles',
    secondary: 'Welcome to Doctor Portal',
  };
  return (
    <div className="my-10 w-11/12 mx-auto">
      <SectionHeading heading={heading}></SectionHeading>
      <div className="flex flex-col-reverse lg:flex-row md:flex-row gap-10 md:gap-5 lg:gap-20">
        <div className="w-full lg:w-1/2 md:w-1/2">
          <p>
            Thank you for considering our clinic for you and your family’s dental needs. We are
            pleased to welcome you as a new patient and look forward to being of service to you. We
            provide a full range of general, preventive and cosmetic dental treatments in a relaxed
            atmosphere, using the latest technology. Our goal is to provide our patients with the
            best possible dental care in an environment of comfort and compassion.
          </p>
          <p className="lg:my-10 my-5">
            If you are experiencing loose teeth, bleeding gums, sensitivity or pain with your teeth
            when eating or drinking, please make an appointment with us to discuss your dental
            health needs. We use advanced proven technology to keep your smile looking the best!
          </p>
          <Link
            to="/appointment"
            className="btn btn-primary text-white bg-gradient-to-r from-primary to-accent"
          >
            Make An Appointment
          </Link>
        </div>
        <div className="w-full lg:w-1/2 md:w-1/2">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default History;
