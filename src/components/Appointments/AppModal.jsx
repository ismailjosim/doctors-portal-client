import { format } from 'date-fns';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthProvider';

const AppModal = ({ service, selectedDate, setService, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name: treatmentName, slots, price } = service;
  const date = format(selectedDate, 'PP');
  const location = useLocation();

  const handleModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.fullName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      appointmentDate: date,
      treatmentName: treatmentName,
      patientName: name,
      slot,
      email,
      phone,
      price,
    };
    fetch(`${process.env.REACT_APP_BACKEND_API_URL}/bookings`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        const booking = data.bookings;
        if (booking.acknowledged) {
          toast.success('Booking Confirmed 🎉', { autoClose: 1000 });
          refetch();
          setService(null);
        } else {
          toast.error(data.bookings, { autoClose: 1000 });
          setService(null);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="mb-8">
            <h3 className="font-bold text-lg">{treatmentName}</h3>
          </div>

          <form onSubmit={handleModal} className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div>
              <input
                id="name"
                type="text"
                disabled
                defaultValue={date}
                className="w-full p-3 rounded-md border"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                disabled
                defaultValue={user?.email}
                placeholder="Email"
                className="w-full p-3 rounded-md border input-primary"
              />
            </div>
            <div>
              <input
                required
                name="fullName"
                type="text"
                disabled
                defaultValue={user?.displayName}
                placeholder="Full Name"
                className="w-full p-3 rounded-md border input-primary"
              />
            </div>
            <div>
              <select name="slot" className="select select-accent w-full p-3 rounded-md border">
                {slots.map((slot, idx) => (
                  <option value={slot} key={idx}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                required
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 rounded-md border input-primary"
              />
            </div>
            <div className="modal-action">
              {user ? (
                <>
                  <label htmlFor="booking-modal" className="btn btn-error text-white">
                    Cancel
                  </label>
                  <button
                    type="submit"
                    htmlFor="booking-modal"
                    className="btn btn-primary text-white"
                  >
                    Submit
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  state={{ from: location }}
                  replace
                  className="btn btn-error text-white"
                >
                  Please Login For Book Appointment
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppModal;
