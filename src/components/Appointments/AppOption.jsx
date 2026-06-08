import React from 'react';

const AppOption = ({ option, setService }) => {
  const { name, slots, price } = option;
  return (
    <div className="bg-base-100 rounded-lg shadow-xl border-2 border-primary">
      <div className="card-body text-center py-10">
        <h2 className="text-center font-bold text-xl text-accent">{name}</h2>
        <div className="my-2">
          <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
          <p>
            {slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available
          </p>
          <div className="badge badge-error text-white py-3 my-3">Doctor Visit Fees: {price}TK</div>
        </div>

        <div className="card-actions justify-center">
          <label
            onClick={() => setService(option)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
            disabled={slots.length === 0}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppOption;
