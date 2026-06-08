import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';

export const FAQs = () => {
  return (
    <div className="my-20">
      <div div className="text-center mb-16">
        <h4 className="text-accent font-bold text-xl uppercase">FAQs</h4>
        <h2 className="text-secondary font-normal text-3xl">Have any questions?</h2>
      </div>
      <div className="bg-white lg:w-8/12 w-11/12 mx-auto">
        <div className="divide-y divide-neutral-200">
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-semibold lg:text-xl text-base">
                  What are your office hours?
                </span>
                <span className="transition group-open:rotate-45">
                  <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Our office is open from 9:00 AM to 5:00 PM from Monday to Friday, and from 9:00 AM
                to 2:00 PM on Saturdays.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-semibold lg:text-xl text-base">
                  What services do you offer?
                </span>
                <span className="transition group-open:rotate-45">
                  <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offer a full range of dental services, including regular check-ups and cleanings,
                fillings, root canal therapy, crowns and bridges, dental implants, and cosmetic
                dentistry.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-semibold lg:text-xl text-base">Do you accept insurance?</span>
                <span className="transition group-open:rotate-45">
                  <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes, we accept most major insurance plans and will be happy to file claims on your
                behalf.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-semibold lg:text-xl text-base">
                  What should I do if I have a dental emergency
                </span>
                <span className="transition group-open:rotate-45">
                  <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                If you have a dental emergency during office hours, please call us immediately and
                we will do our best to see you as soon as possible. If you have an emergency after
                hours, please follow the instructions provided on our answering machine for
                emergency contact information.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-semibold lg:text-xl text-base">
                  How often should I visit the dentist for a check-up and cleaning?
                </span>
                <span className="transition group-open:rotate-45">
                  <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Most dental professionals recommend visiting the dentist every six months for a
                regular check-up and cleaning. However, the frequency of your visits may vary
                depending on your individual needs.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-semibold lg:text-xl text-base">
                  What is the cost of your services?
                </span>
                <span className="transition group-open:rotate-45">
                  <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                The cost of our services varies depending on the type of treatment you need. We will
                provide you with a detailed estimate of the cost of your treatment after a thorough
                examination and discussion of your options.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-semibold lg:text-xl text-base">
                  Do you use sedation dentistry for anxious patients?
                </span>
                <span className="transition group-open:rotate-45">
                  <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes, we offer several options for sedation dentistry to help our patients feel
                comfortable and relaxed during their appointments.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-semibold lg:text-xl text-base">
                  How long does it take to get a dental implant?
                </span>
                <span className="transition group-open:rotate-45">
                  <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                The length of time it takes to complete a dental implant procedure can vary, but it
                typically takes several months from start to finish.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-semibold lg:text-xl text-base">
                  How can I make an appointment?
                </span>
                <span className="transition group-open:rotate-45">
                  <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                You can make an appointment by calling our office or by using our online appointment
                request form.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQs;
