import React from 'react';
import '../../styles/Custom.css';
import googlePlay from '../../assets/images/google-play.svg';
import appStore from '../../assets/images/app-store.svg';
import qrCode from '../../assets/images/qrcode.svg';

const AppDownload = () => {
  return (
    <div>
      <section className="overflow-hidden bg-cover bg-center bg-no-repeat bg-app-custom">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24 grid lg:grid-cols-2 grid-cols-1 justify-between">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="text-xl font-bold text-white lg:text-3xl md:text-4xl">
              Download and register on our App for free and feel safe for all your family
            </h2>
            <p className="hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              To download the app on your mobile, go the Play Store or open your camera and point it
              towards the QR code
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end my-5">
            <h2 className="text-white lg:text-right lg:text-xl mb-5">Download Our Official App</h2>
            <div className="flex lg:justify-end items-center gap-5">
              <img className="w-28" src={qrCode} alt="" />
              <div>
                <img className="mb-2 w-36" src={googlePlay} alt="" />
                <img className="w-36" src={appStore} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDownload;
