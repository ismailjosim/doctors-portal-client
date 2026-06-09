import React from 'react';

const TestimonialCard = ({ data }) => {
  const { name, picture, address, details } = data;
  return (
    <div className="flex flex-col justify-center rounded-xl border border-primary/10 bg-white p-10 shadow-lg">
      <p className="text-secondary/70">{details}</p>
      <div className="flex gap-5 mt-5">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={picture} alt="" />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-secondary">{name}</h4>
          <h5 className="text-sm text-secondary/60">{address}</h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
