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
      bodyText: 'Mon-Sat, 8:00 AM - 6:00 PM',
      bgClass: 'bg-primary',
      img: clock,
    },
    {
      id: 2,
      heading: 'Visit the clinic',
      bodyText: '101010 Hudson, New York',
      bgClass: 'bg-secondary',
      img: marker,
    },
    {
      id: 3,
      heading: 'Call reception',
      bodyText: '+1 (000) 123-4567',
      bgClass: 'bg-accent',
      img: phone,
    },
  ];

  return (
    <section className="page-shell -mt-6 mb-24 relative z-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ctaData.map((data) => (
          <CtaCard key={data.id} data={data}></CtaCard>
        ))}
      </div>
    </section>
  );
};

export default CallToAction;
