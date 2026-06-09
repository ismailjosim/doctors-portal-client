import React from 'react';
import SectionHeading from '../../Shared/SectionHeading';
import { TiTick } from 'react-icons/ti';
import Slider from 'react-slick';
import img01 from '../../../assets/gallery/gallery01.jpg';
import img02 from '../../../assets/gallery/gallery02.jpg';
import img03 from '../../../assets/gallery/gallery03.jpg';
import img04 from '../../../assets/gallery/gallery04.jpg';
import img05 from '../../../assets/gallery/gallery05.jpg';

const Advantages = () => {
  const heading = {
    primary: 'ADVANTAGES',
    secondary: 'Why Choose Us?',
  };
  const specialty = [
    '24 Hour Emergency Service',
    '50+ Years of Combined Experience',
    'Invitation Premier Provider',
    'Offering Sedation Services',
    'Work with Most Insurance Plans',
    'Flexible Payment Options',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slideImages = [img01, img02, img03, img04, img05];

  return (
    <div className="bg-[#eef5f4] py-20">
      <SectionHeading heading={heading}></SectionHeading>
      <div className="page-shell grid gap-10 md:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-lg shadow-xl">
          <Slider {...settings}>
            {slideImages.map((slide, idx) => (
              <div key={idx}>
                <img className="h-[380px] w-full object-cover" src={slide} alt="Clinic interior" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex flex-col justify-center">
          <p className="leading-8 text-secondary/70">
            Our dental clinic is a modern and comfortable facility, with a professional dental team
            who will take time to listen to your concerns, desired outcomes, and provide you with
            high quality dental care.
          </p>
          <ul className="my-8 grid gap-3 sm:grid-cols-2">
            {specialty.map((feature, idx) => {
              return (
                <li key={idx} className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm">
                  <TiTick className="text-lg text-primary" />
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
