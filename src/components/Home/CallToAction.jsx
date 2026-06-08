import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import CtaCard from './CtaCard';
const CallToAction = () => {
  const ctaData = [
    {
      id: 1,
      heading: 'Working Hours',
      bodyText: 'From 8.00AM - To 6.00PM',
      bgClass: 'bg-gradient-to-r from-primary to-accent',
      img: clock,
    },
    {
      id: 2,
      heading: 'Visit our location',
      bodyText: 'Brooklyn, NY 10036, United States',
      bgClass: 'bg-secondary',
      img: marker,
    },
    {
      id: 3,
      heading: 'Opening Hours',
      bodyText: '+000 123 456789',
      bgClass: 'bg-gradient-to-r from-accent to-primary',
      img: phone,
    },
  ];

  return (
    <section className="mb-32 mt-16">
      <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {ctaData.map((data) => (
          <CtaCard key={data.id} data={data}></CtaCard>
        ))}
      </div>
    </section>
  );
};

export default CallToAction;
