import React from 'react';

const ContactForm = () => {
  const handleContactBtn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-bg py-12 lg:py-20">
      <div className="mx-auto mb-10 w-11/12 text-center lg:w-1/2">
        <h4 className="font-bold text-accent">Contact Us</h4>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Stay connected with us</h2>
      </div>
      <div className="mx-auto w-11/12 rounded-lg bg-white/95 p-6 shadow-2xl md:w-1/2 lg:w-1/3">
        <form onSubmit={handleContactBtn} className="flex flex-col gap-6">
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <input
              id="name"
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <textarea
              id="message"
              rows="5"
              className="textarea textarea-bordered w-full"
              placeholder="Your Message"
              spellCheck="false"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-6 text-white">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
