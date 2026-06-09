import React from 'react';
import Advantages from './AboutSections/Advantages';
import CTA from './AboutSections/CTA';
import History from './AboutSections/History';
import PageHeader from './AboutSections/PageHeader';
import Team from './AboutSections/Team';
const About = () => {
  return (
    <>
      <PageHeader title="about us" />
      <History />
      <Advantages />
      <CTA />
      <Team />
    </>
  );
};

export default About;
