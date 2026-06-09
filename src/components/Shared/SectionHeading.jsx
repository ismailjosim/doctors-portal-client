import React from 'react';

const SectionHeading = ({ heading }) => {
  const { primary, secondary } = heading;
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h4 className="section-kicker text-sm">{primary}</h4>
      <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">{secondary}</h2>
    </div>
  );
};

export default SectionHeading;
