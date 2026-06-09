import React from 'react';

const AppOption = ({ option, setService }) => {
  const { name, slots, price } = option;
  return (
    <div className="rounded-lg border border-primary/10 bg-base-100 shadow-xl">
      <div className="card-body py-8 text-center">
        <h2 className="text-center text-xl font-bold text-secondary">{name}</h2>
        <div className="my-2">
          <p className="font-semibold text-primary">
            {slots.length > 0 ? slots[0] : 'Try Another Day'}
          </p>
          <p className="text-sm text-secondary/60">
            {slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available
          </p>
          <div className="badge badge-outline border-accent py-3 text-accent my-3">
            Visit fee: {price}TK
          </div>
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
