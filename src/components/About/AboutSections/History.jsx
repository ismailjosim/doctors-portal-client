import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/about/image-42.jpg';
import SectionHeading from '../../Shared/SectionHeading';

const History = () => {
  const heading = {
    primary: 'New smiles',
    secondary: 'Welcome to Doctors Portal',
  };
  return (
    <div className="page-shell my-16">
      <SectionHeading heading={heading}></SectionHeading>
      <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <p className="leading-8 text-secondary/70">
            Thank you for considering our clinic for you and your family’s dental needs. We are
            pleased to welcome you as a new patient and look forward to being of service to you. We
            provide a full range of general, preventive and cosmetic dental treatments in a relaxed
            atmosphere, using the latest technology. Our goal is to provide our patients with the
            best possible dental care in an environment of comfort and compassion.
          </p>
          <p className="my-6 leading-8 text-secondary/70">
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
        <div className="overflow-hidden rounded-lg shadow-2xl">
          <img src={img} alt="Dental clinic team" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default History;
