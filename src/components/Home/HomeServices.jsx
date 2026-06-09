import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';
import SectionHeading from '../Shared/SectionHeading';
const HomeServices = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Fluoride Treatment',
      image: fluoride,
      description:
        'Protective enamel care for children and adults, planned around your prevention goals.',
    },
    {
      id: 2,
      title: 'Cavity Filling',
      image: cavity,
      description:
        'Tooth-colored restorations that repair damage while preserving a natural bite and smile.',
    },
    {
      id: 3,
      title: 'Teeth Whitening',
      image: whitening,
      description:
        'Guided whitening options with shade planning, sensitivity checks, and dentist oversight.',
    },
  ];
  const heading = {
    primary: 'OUR SERVICES',
    secondary: 'Care Designed Around Your Smile',
  };

  return (
    <div className="page-shell mb-24">
      <SectionHeading heading={heading}></SectionHeading>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
