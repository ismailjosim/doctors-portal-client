import React, { useState } from 'react';
import { format } from 'date-fns';
import AppOption from './AppOption';
import AppModal from './AppModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';

const AppointmentAvailable = ({ selectedDate }) => {
  const [service, setService] = useState(null);
  const date = format(selectedDate, 'PP');

  const {
    data: appOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['appOptions', date],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/appOptions?date=${date}`);
      const data = await res.json();
      return data?.options;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="page-shell my-20">
      <h2 className="mb-10 mt-5 text-center text-2xl font-bold text-secondary">
        Available Appointments on {format(selectedDate, 'PP')}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {appOptions.map((option) => (
          <AppOption key={option._id} option={option} setService={setService}></AppOption>
        ))}
      </div>
      {service && (
        <AppModal
          service={service}
          selectedDate={selectedDate}
          setService={setService}
          refetch={refetch}
        ></AppModal>
      )}
    </section>
  );
};

export default AppointmentAvailable;
