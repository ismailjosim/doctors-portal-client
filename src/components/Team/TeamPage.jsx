import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import img01 from '../../assets/team/image-13-800x800.jpg';
import img02 from '../../assets/team/image-14-800x800.jpg';
import img03 from '../../assets/team/image-15-800x800.jpg';
import img04 from '../../assets/team/image-16-800x800.jpg';
import img05 from '../../assets/team/image-17-800x800.jpg';
import img06 from '../../assets/team/image-18-800x800.jpg';
import img07 from '../../assets/team/image-19-800x800.jpg';
import img08 from '../../assets/team/image-20-800x800.jpg';
import PageHeader from '../About/AboutSections/PageHeader';
import Emergency from './../About/AboutSections/Emergency';
const TeamPage = () => {
  const teamDetails = [
    {
      name: 'Stewart Wheal',
      post: 'Oral Health Therapist',
      email: 'dr.whelan@clinic.com',
      img: img01,
      details: 'Great specialist in promoting oral health and disease prevention.',
    },
    {
      name: 'Brooke Roberts',
      post: 'Practice Manager',
      email: 'dr.roberts@clinic.com',
      img: img02,
      details: 'Great specialist in promoting oral health and disease prevention.',
    },
    {
      name: 'David Nutter',
      post: 'Associate Dentist',
      email: 'dr.nutter@clinic.com',
      img: img03,
      details: 'Great specialist in promoting oral health and disease prevention.',
    },
    {
      name: 'Emily Silver',
      post: 'Oral Health Therapist',
      email: 'dr.silver@clinic.com',
      img: img04,
      details: 'Great specialist in promoting oral health and disease prevention.',
    },
    {
      name: 'Elizabeth Welsh',
      post: 'Dentist',
      email: 'dr.waterford@clinic.com',
      img: img05,
      details: 'Great specialist in promoting oral health and disease prevention.',
    },
    {
      name: 'Brandon Fuller',
      post: 'Hygienist',
      email: 'dr.fuller@clinic.com',
      img: img06,
      details: 'Great specialist in promoting oral health and disease prevention.',
    },
    {
      name: 'Andrea Hayes',
      post: 'Orthodontist',
      email: 'dr.hayes@clinic.com',
      img: img07,
      details: 'Great specialist in promoting oral health and disease prevention.',
    },
    {
      name: 'Alex Turner',
      post: 'Clinical Director',
      email: 'dr.turner@clinic.com',
      img: img08,
      details: 'Has an exceptional organizational and leadership skills.',
    },
  ];

  return (
    <div className="">
      <PageHeader title="Our team"></PageHeader>
      <div className="w-11/12 mx-auto mt-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {teamDetails.map((data, id) => {
            const { name, post, email, img, details } = data;
            return (
              <div key={id} className="relative mt-16 mb-32 sm:mb-24">
                <div className="rounded overflow-hidden shadow-lg bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32 ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-20">
                    <div className="font-bold text-3xl text-center pb-1">{name}</div>
                    <p className="text-gray-800 text-sm text-center">{post}</p>
                    <p className="text-gray-800 text-sm text-center">Email: {email}</p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      {details}
                    </p>
                    <div className="w-full flex justify-center py-5 gap-5">
                      <button className="text-white bg-accent hover:bg-secondary transition-all duration-500 p-2 rounded-full">
                        <FaFacebookF />
                      </button>
                      <button className="text-white bg-accent hover:bg-secondary transition-all duration-500 p-2 rounded-full">
                        <FaTwitter />
                      </button>
                      <button className="text-white bg-accent hover:bg-secondary transition-all duration-500 p-2 rounded-full">
                        <FaInstagram />
                      </button>
                      <button className="text-white bg-accent hover:bg-secondary transition-all duration-500 p-2 rounded-full">
                        <FaDiscord />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Emergency />
    </div>
  );
};

export default TeamPage;
