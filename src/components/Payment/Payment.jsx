import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import payment from '../../assets/icons/payment.gif';
import { Elements } from '@stripe/react-stripe-js';
import PaymentCheckout, { stripePromise } from '../PaymentCheckout/PaymentCheckout';
import Loading from '../Shared/Loading';

const Payment = () => {
  const data = useLoaderData();
  const { _id, treatmentName, email, price } = data.booking;
  const navigation = useNavigate();

  if (navigation.state === 'loading') {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3 className="font-bold capitalize text-2xl text-center mt-10">service Summary</h3>
      <div className="p-8 w-9/12 mx-auto border-2 border-primary my-5 rounded-md shadow-lg">
        <div className="sm:flex justify-between gap-5">
          <div className="flex-shrink-0 lg:w-40 lg:h-40 w-32 mb-6 h-32 mx-auto sm:h-32 sm:w-32 sm:mb-0 lg:ring ring-accent ring-offset-base-100 ring-offset-2 rounded-md">
            <img
              alt=""
              src={payment}
              className="object-cover object-center w-full h-full rounded"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">{treatmentName}</h2>
              <span className="text-sm dark:text-gray-400">service ID: {_id}</span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-400">{email}</span>
              </span>
              <span className="flex items-center space-x-2 text-xl font-bold">
                <h3>Total: {price}TK</h3>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 p-3">
          <Elements stripe={stripePromise}>
            <PaymentCheckout booking={data.booking} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
