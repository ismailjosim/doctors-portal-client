import React from 'react';

const ServiceCard = ({ service }) => {
  const { title, image, description } = service;
  return (
    <div className="card border border-primary/10 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={title} className="h-24 object-contain" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-xl font-semibold text-secondary">{title}</h2>
        <p className="text-sm leading-7 text-secondary/65">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
