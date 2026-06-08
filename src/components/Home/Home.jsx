import React from 'react';
import ContactForm from '../Contact Us/ContactSections/ContactForm';
import AppDownload from './AppDownload';
import CallToAction from './CallToAction';
import FAQs from './FAQs';
import Featured from './Featured';
import Gallery from './Gallery';
import Hero from './Hero';
import HomeAppointment from './HomeAppointment';
import HomeServices from './HomeServices';
import Pricing from './Pricing';
import Solutions from './Solutions';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <section>
      <Hero />
      <CallToAction />
      <HomeServices />
      <Solutions />
      <Featured />
      <HomeAppointment />
      <Gallery />
      <AppDownload />
      <Testimonials />
      <FAQs />
      <Pricing />
      <ContactForm />
    </section>
  );
};

export default Home;
