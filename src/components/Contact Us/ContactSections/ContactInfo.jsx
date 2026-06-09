import React from 'react';
import { BiMap, BiPhoneCall, BiEnvelope, BiTime } from 'react-icons/bi';

const ContactInfo = () => {
  const info = [
    {
      icon: <BiMap />,
      title: '101010 Hudson, New York',
    },
    {
      icon: <BiPhoneCall />,
      title: '+1 (000) 123-4567',
    },
    {
      icon: <BiEnvelope />,
      title: 'care@doctorsportal.com',
    },
    {
      icon: <BiTime />,
      title: '8:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="page-shell my-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {info.map((data, idx) => {
        return (
          <div key={idx} className="flex min-h-[170px] flex-col items-center justify-center gap-3 rounded-lg border border-primary/10 bg-white p-6 text-center shadow-lg">
            <span className="inline-block rounded-lg bg-primary/10 p-4 text-3xl text-primary">
              {data.icon}
            </span>
            <span className="text-sm font-medium text-secondary">{data.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
