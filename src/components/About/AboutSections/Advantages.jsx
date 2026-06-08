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
    <div className="bg-slate-200 py-20">
      <SectionHeading heading={heading}></SectionHeading>
      <div className="flex lg:flex-row md:flex-row flex-col gap-10 md:gap-5 lg:gap-20 w-11/12 mx-auto">
        <div className="w-full lg:w-1/2 md:w-1/2">
          <Slider {...settings}>
            {slideImages.map((slide, idx) => (
              <div key={idx}>
                <img className="h-fit" src={slide} alt="" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full lg:w-1/2 md:w-1/2">
          <p className="lg:w-9/12 w-full">
            Our dental clinic is a modern and comfortable facility, with a professional dental team
            who will take time to listen to your concerns, desired outcomes, and provide you with
            high quality dental care.
          </p>
          <ul className="my-10">
            {specialty.map((feature, idx) => {
              return (
                <li key={idx} className="flex items-center gap-2 mb-2">
                  <TiTick className="text-primary text-lg" />
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
