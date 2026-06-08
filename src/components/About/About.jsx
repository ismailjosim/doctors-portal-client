import React from 'react';
import Advantages from './AboutSections/Advantages';
import CTA from './AboutSections/CTA';
import History from './AboutSections/History';
import PageHeader from './AboutSections/PageHeader';
import Team from './AboutSections/Team';
const About = () => {
  return (
    <div>
      <PageHeader title="about us" />
      <History />
      <Advantages />
      <CTA />
      <Team />
    </div>
  );
};

export default About;
