import React from 'react';

const CtaCard = ({ data }) => {
  const { heading, bodyText, bgClass, img } = data;
  return (
    <div className={`${bgClass} rounded-lg p-6 text-white shadow-xl`}>
      <div className="flex items-center gap-5">
        <img className="h-12 w-12" src={img} alt={heading} />
        <div>
          <h2 className="text-lg font-bold leading-7">{heading}</h2>
          <p className="text-sm text-white/80">{bodyText}</p>
        </div>
      </div>
    </div>
  );
};

export default CtaCard;
