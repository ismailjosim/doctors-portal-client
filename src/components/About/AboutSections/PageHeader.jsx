import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const PageHeader = ({ title }) => {
  return (
    <div className="w-full section_banner">
      <div className="w-full flex flex-col items-center justify-between bg-black bg-opacity-40 py-10 lg:py-20">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-white bg-opacity-10 px-4 py-2 rounded-xl flex items-center justify-center space-x-2 lg:space-x-4">
            <span className="text-xl lg:text-2xl xl:text-3xl font-bold uppercase">{title}</span>
          </div>
          <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="text-white hover:text-primary transition-all duration-500">
              <AiFillHome />
            </Link>

            <span className="text-gray-500 dark:text-gray-300 mx-2">|</span>
            <button className="text-gray-600 dark:text-gray-200 hover:underline">{title}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
