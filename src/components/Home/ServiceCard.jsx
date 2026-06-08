import React from 'react';

const ServiceCard = ({ service }) => {
  const { title, image, description } = service;
  return (
    <div className="card shadow-lg">
      <figure className="px-10 pt-10">
        <img src={image} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
