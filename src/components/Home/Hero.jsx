import React from 'react';
import heroImg from '../../assets/images/chair.png';
import '../../styles/Custom.css';

const Hero = () => {
  return (
    <section className="custom-bg py-12 lg:py-20">
      <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="text-center lg:text-left">
          <p className="section-kicker text-sm">Modern dental care</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-secondary sm:text-6xl">
            Confident smiles, coordinated care, zero waiting-room chaos.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-secondary/70 lg:mx-0">
            Book trusted dentists, compare available treatment slots, and manage every appointment
            from a calm patient portal built for real clinic days.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="/appointment" className="btn btn-primary text-white">
              Book an appointment
            </a>
            <a href="/team" className="btn btn-outline border-primary text-primary hover:bg-primary">
              Meet our doctors
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3 text-left">
            <div className="glass-card rounded-lg p-4">
              <strong className="block text-2xl text-secondary">24k+</strong>
              <span className="text-xs text-secondary/60">patient visits</span>
            </div>
            <div className="glass-card rounded-lg p-4">
              <strong className="block text-2xl text-secondary">4.9</strong>
              <span className="text-xs text-secondary/60">care rating</span>
            </div>
            <div className="glass-card rounded-lg p-4">
              <strong className="block text-2xl text-secondary">18</strong>
              <span className="text-xs text-secondary/60">specialists</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="glass-card rounded-lg p-6">
            <img src={heroImg} alt="Dental treatment chair" className="mx-auto max-h-[520px] object-contain" />
          </div>
          <div className="absolute bottom-6 left-0 hidden max-w-xs rounded-lg bg-secondary p-5 text-white shadow-2xl md:block">
            <p className="text-sm text-white/70">Next available</p>
            <p className="mt-1 font-semibold">Today, 4:30 PM with Dr. Hayes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
