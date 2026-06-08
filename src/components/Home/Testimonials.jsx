import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: 'Ismail Josim',
      address: 'California',
      picture: people1,
      details:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
    {
      id: 2,
      name: 'Robert Philips',
      address: 'California',
      picture: people2,
      details:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
    {
      id: 3,
      name: 'Top Holland',
      address: 'California',
      picture: people3,
      details:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-primary font-bold text-xl">Testimonial</h4>
          <h2 className="text-2xl font-bold sm:text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quote} alt="" className="w-40" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
        {testimonialData.map((data) => (
          <TestimonialCard key={data.id} data={data}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
