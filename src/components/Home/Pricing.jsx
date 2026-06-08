import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

import pic01 from '../../assets/price/svgexport-17.svg';
import pic02 from '../../assets/price/svgexport-18.svg';
import pic03 from '../../assets/price/svgexport-19.svg';
import pic04 from '../../assets/price/svgexport-20.svg';

const Pricing = () => {
  const pricePackages = [
    {
      name: 'Dental Essentials',
      picture: pic01,
      featured: [
        { name: 'New patient dental check-up', price: 130 },
        { name: 'Radiographs (X-Rays)', price: 15 },
        { name: 'Regular dental examination', price: 80 },
        { name: 'Emergency consultation', price: 150 },
        { name: 'Panoramic X-Ray (OPG)', price: 60 },
        { name: 'Periodontal consultation', price: 150 },
        { name: 'Dental implant', price: 2750 },
        { name: 'Sedation', price: 350 },
      ],
    },
    {
      name: 'Cosmetic Treatments',
      picture: pic02,
      featured: [
        { name: 'Porcelain veneers', price: 850 },
        { name: 'Teeth whitening', price: 350 },
        { name: 'Enlighten whitening', price: 650 },
        { name: 'Invisalign', price: 3300 },
        { name: 'Braces', price: 3500 },
        { name: 'Laser gum sharping', price: 500 },
        { name: 'Bonding and contouring', price: 475 },
        { name: 'Composite veneers', price: 450 },
      ],
    },
    {
      name: 'Hygiene Treatments',
      picture: pic03,
      featured: [
        { name: 'Hygiene (30 Mins)', price: 85 },
        { name: 'Regular dental examination', price: 80 },
        { name: 'Hygiene(45 Mins) ', price: 105 },
        { name: 'Hygiene (60 Mins)', price: 145 },
        { name: 'Additional airflow', price: 35 },
        { name: 'Scale and polish', price: 79 },
        { name: 'Periodontal deep clean with local anaesthetic', price: 195 },
      ],
    },
    {
      name: 'Dental Surgery',
      picture: pic04,
      featured: [
        { name: 'Simple extraction', price: 200 },
        { name: 'Surgical extractions', price: 250 },
        { name: 'Wisdom tooth extraction', price: 300 },
        { name: 'Gum contouring', price: 50 },
        { name: 'Root canal treatment', price: 465 },
        { name: 'Dental implant', price: 465 },
      ],
    },
  ];

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto mb-20">
      <div div className="text-center mb-16">
        <h4 className="text-accent font-bold text-xl uppercase">Price</h4>
        <h2 className="text-secondary font-normal text-3xl">See Our Pricing Plans</h2>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-20 gap-10">
        {pricePackages.map((data, id) => {
          return (
            <div
              key={id}
              className="shadow-lg hover:shadow-sm transition-all duration-500 p-5 rounded-lg border-t-4 border-primary bg-white"
            >
              <img src={data.picture} alt="" />
              <p className="mt-4 text-3xl text-gray-700 font-medium">{data.name}</p>
              <div className="mr-10 my-5">
                <ul className="grid grid-cols-1 gap-4">
                  {data.featured.map((feature, idx) => {
                    return (
                      <div key={idx} className="flex justify-between mb-2">
                        <p className="flex items-center gap-2">
                          <AiFillCheckCircle className="text-primary text-xl" />
                          <span>{feature.name}</span>
                        </p>
                        <span className="font-bold text-primary">${feature.price}</span>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
