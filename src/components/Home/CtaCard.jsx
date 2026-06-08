import React from 'react';

const CtaCard = ({ data }) => {
  const { heading, bodyText, bgClass, img } = data;
  return (
    <div
      className={`${bgClass} text-white lg:py-12 md:py-12 py-8 lg:px-10 md:px-8 px-4 rounded-md shadow-xl`}
    >
      <div className="flex lg:flex-row flex-col justify-around items-center gap-5">
        <img className="mx-w-14" src={img} alt={heading} />
        <div>
          <h2 className="text-xl font-bold leading-7">{heading}</h2>
          <p>{bodyText}</p>
        </div>
      </div>
    </div>
  );
};

export default CtaCard;
