import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';

const faqData = [
  {
    question: 'What are your office hours?',
    answer:
      'Our office is open from 9:00 AM to 5:00 PM from Monday to Friday, and from 9:00 AM to 2:00 PM on Saturdays.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We offer a full range of dental services, including regular check-ups and cleanings, fillings, root canal therapy, crowns and bridges, dental implants, and cosmetic dentistry.',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'Yes, we accept most major insurance plans and will be happy to file claims on your behalf.',
  },
  {
    question: 'What should I do if I have a dental emergency?',
    answer:
      'If you have a dental emergency during office hours, please call us immediately and we will do our best to see you as soon as possible.',
  },
  {
    question: 'How often should I visit the dentist for a check-up and cleaning?',
    answer:
      'Most dental professionals recommend visiting the dentist every six months for a regular check-up and cleaning.',
  },
  {
    question: 'What is the cost of your services?',
    answer:
      'The cost of our services varies depending on the type of treatment you need. We will provide a detailed estimate after examination.',
  },
  {
    question: 'Do you use sedation dentistry for anxious patients?',
    answer:
      'Yes, we offer several options for sedation dentistry to help patients feel comfortable and relaxed.',
  },
  {
    question: 'How long does it take to get a dental implant?',
    answer:
      'The length of time varies, but it typically takes several months from start to finish.',
  },
  {
    question: 'How can I make an appointment?',
    answer:
      'You can make an appointment by calling our office or by using our online appointment request form.',
  },
];

const FAQItem = ({ question, answer }) => (
  <div className="py-5">
    <details className="group">
      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
        <span className="lg:text-xl text-base font-semibold">{question}</span>

        <IoIosAddCircle className="text-2xl text-white bg-primary rounded-full transition-transform duration-300 group-open:rotate-45" />
      </summary>

      <p className="mt-3 text-secondary/70">{answer}</p>
    </details>
  </div>
);

const FAQs = () => {
  return (
    <section className="my-20">
      <div className="text-center mb-16">
        <h4 className="text-accent font-bold text-xl uppercase">FAQs</h4>

        <h2 className="text-secondary text-3xl">Have any questions?</h2>
      </div>

      <div className="bg-white px-5 rounded-md shadow-sm lg:w-8/12 w-11/12 mx-auto">
        <div className="divide-y divide-primary/10">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
