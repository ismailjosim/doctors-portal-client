import React from 'react';
import featuredImg from '../../assets/images/treatment.png';

const Featured = () => {
  return (
    <section className="lg:py-18 py-5 lg:mb-60">
      <div className="container mx-auto flex lg:flex-row flex-col justify-center lg:gap-24 sm:gap-5">
        <div className="flex items-center justify-center mx-12">
          <img src={featuredImg} alt="" className="lg:h-[576px] h-full rounded-lg" />
        </div>
        <div className="flex flex-col justify-center p-7 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h2 className="text-3xl font-bold sm:text-5xl">Exceptional Dental Care, on Your Terms</h2>
          <p className="mt-6 mb-8 text-base sm:mb-12 text-left leading-6">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum that it has a
            more-or-less normal distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web
            page
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-accent">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
