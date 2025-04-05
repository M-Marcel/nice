import React, { useState } from "react";



const Questions = () => {
  const [accordianOpen, setAccordianOpen] = useState<number | null>(null);

const toggleAccordion = (index: number) => {
  setAccordianOpen(prevIndex => (prevIndex === index ? null : index))
};

const faqData = [
  {
    question: "Are your solutions secure?",
    answer:
      "Yes, security is our top priority. We follow industry-leading frameworks like NIST, ISO 27001, and ENISA. Plus, our AI models are PII-free, meaning we don't require any personal data from you.",
  },
  {
    question: "Do you collect personal data?",
    answer:
      "Yes, security is our top priority. We follow industry-leading frameworks like NIST, ISO 27001, and ENISA, plus, our Al models are PIl-free, meaning we don't require any personal data from you."
  },
  {
    question: "What kind of data do you need?",
    answer:
      "Yes, security is our top priority. We follow industry-leading frameworks like NIST, ISO 27001, and ENISA, plus, our Al models are PIl-free, meaning we don't require any personal data from you.",
  },
  {
    question: "How simple is the integration process?",
    answer:
      "Yes, security is our top priority. We follow industry-leading frameworks like NIST, ISO 27001, and ENISA, plus, our Al models are PIl-free, meaning we don't require any personal data from you.",
  },
];

  return (
    <div className="relative top-[80px] w-[100%] flex flex-col flex-wrap items-center justify-center ">
      <h2 className="text-[30px]  lg:text-[42px] w-[100%] lg:w-[45%]">
        Questions you may have
      </h2>
      {faqData.map((item, index) => (
        <div 
        key={index}
        className="py-12 px-4 border border-gray-100 rounded-[40px] w-full lg:w-[45%] mt-8"
        >
        <button
          className="flex text-xl text-black-200 justify-between w-full "
          onClick={() => toggleAccordion(index)}
        >
          <span className="text-lg lg:text-2xl px-4 ">
            {item.question}
          </span>

          {accordianOpen === index ? (
            <span className="pe-8" id="accord-1">
              <svg
                width="39"
                height="38"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transform origin-center transition duration-200 ease-out ${accordianOpen && "!rotate-180"}`}
              >
                <rect x="0.5" width="48" height="48" rx="24" fill="black" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.1569 19.7573L28.7426 18.3431L24.5 22.5857L20.2574 18.3431L18.8431 19.7573L23.0858 24L18.8431 28.2426L20.2574 29.6568L24.5 25.4142L28.7426 29.6568L30.1569 28.2426L25.9142 24L30.1569 19.7573Z"
                  fill="white"
                />
              </svg>
            </span>
          ) : (
            <span className="pe-8" id="accord-1">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transform origin-center transition duration-200 ease-out ${accordianOpen && "!rotate-180"}`}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.5 11.4286L20.5 8.57143L11.9286 8.57143L11.9286 -3.74669e-07L9.07143 -4.99559e-07L9.07143 8.57143L0.5 8.57143L0.5 11.4286L9.07143 11.4286L9.07143 20L11.9286 20L11.9286 11.4286L20.5 11.4286Z"
                  fill="#2F2D2D"
                />
              </svg>
            </span>
          )}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out" ${
            accordianOpen === index
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 hidden "
          } `}
        >
          <div className="text-gray-500 text-start text-[18px] py-4 px-4 lg:w-[100%] overflow-hidden ">
            {item.answer}
          </div>
        </div>
      </div>
      ))}
      
    </div>
  );
};

export default Questions;
