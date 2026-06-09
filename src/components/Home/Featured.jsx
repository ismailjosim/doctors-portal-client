import React from 'react';
import featuredImg from '../../assets/images/treatment.png';

const Featured = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="page-shell grid items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-2xl">
          <img src={featuredImg} alt="Dentist treating a patient" className="h-full w-full object-cover" />
        </div>
        <div className="text-center lg:text-left">
          <p className="section-kicker text-sm">Personalized treatment</p>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-5xl">
            Exceptional dental care, planned on your terms.
          </h2>
          <p className="mt-6 text-base leading-8 text-secondary/70">
            From routine hygiene to restorative and cosmetic treatment, your dentist maps every
            step clearly: what matters now, what can wait, and how each visit fits your schedule.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-primary/10 bg-white p-5">
              <h3 className="font-semibold text-secondary">Clear estimates</h3>
              <p className="mt-2 text-sm text-secondary/65">Treatment pricing and next steps before you commit.</p>
            </div>
            <div className="rounded-lg border border-primary/10 bg-white p-5">
              <h3 className="font-semibold text-secondary">Gentle visits</h3>
              <p className="mt-2 text-sm text-secondary/65">Comfort-first care for nervous and busy patients.</p>
            </div>
          </div>
          <div className="mt-8">
            <a href="/appointment" className="btn btn-primary text-white">
              Start with a consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
