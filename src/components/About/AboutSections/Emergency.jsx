import React from 'react';

const Emergency = () => {
  return (
    <div className="team_section_banner hero">
      <div className="lg:py-36 py-20 grid lg:grid-cols-2 w-11/12 mx-auto">
        <div>
          <h2 className="mb-5 lg:text-6xl md:text-4xl text-3xl font-bold text-secondary">
            What to Do in a Dental Emergency?
          </h2>
          <p className="mb-5">
            Our goal is to provide our patients with the best possible dental care in an environment
            of comfort and compassion.
          </p>
          <button className="btn btn-accent text-white">Make an appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
