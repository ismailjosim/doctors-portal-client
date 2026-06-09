import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { format } from 'date-fns';

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `${process.env.REACT_APP_BACKEND_API_URL}/bookings?email=${user.email}`; // error: need to add ? here

  const { data = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('userAccessToken')}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  // console.log(data.bookings);

  return (
    <div className="rounded-lg border border-primary/10 bg-white p-6 shadow-xl">
      <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <p className="section-kicker text-xs">Patient dashboard</p>
          <h3 className="mt-2 text-2xl font-bold text-secondary">
            My Appointments ({data?.bookings?.length || 0})
          </h3>
        </div>
        <p className="badge badge-outline rounded-md py-4">{format(new Date(), 'PP')}</p>
      </div>
      <div className="overflow-x-auto rounded-lg border border-primary/10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Treatment Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.bookings?.map((booking, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{booking.patientName}</td>
                  <td>{booking.treatmentName}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-error btn-sm text-white">Pay now</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <button className="btn btn-accent btn-sm text-white">Paid</button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
