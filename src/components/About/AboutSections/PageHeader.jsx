import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const PageHeader = ({ title }) => {
  return (
    <div className="w-full section_banner">
      <div className="flex w-full flex-col items-center justify-between py-14 lg:py-24">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-white backdrop-blur">
            <span className="text-3xl font-bold capitalize lg:text-5xl">{title}</span>
          </div>
          <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="text-white transition-all duration-500 hover:text-accent">
              <AiFillHome />
            </Link>

            <span className="mx-2 text-white/50">/</span>
            <button className="text-white/80 capitalize">{title}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
