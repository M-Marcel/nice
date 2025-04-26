import React, { useState } from "react";

const Questions = () => {
  const [accordianOpen, setAccordianOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setAccordianOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: " What is Lanepact's Portfolio Creation Tool?",
      answer: `Lanepact's Portfolio Creation Tool is a user-friendly platform that enables individuals to design and customize professional digital portfolios. 
      It offers a variety of responsive templates and intuitive design tools,
       allowing users to showcase their work and achievements effectively.`,
    },
    {
      question: "Is there a cost associated with creating a portfolio on Lanepact?",
      answer:
        `No, creating a portfolio on Lanepact is completely free until May 31, 2025. After this date, 
        standard pricing plans will apply.​`,
    },
    {
      question: "Who can use Lanepact's Portfolio Creation Tool?",
      answer:
        `Lanepact's Portfolio Creation Tool is designed for everyone, regardless of their profession. 
        Whether you're a designer, developer, writer, or any other professional, you can find a template that suits your needs.​`,
    },
    {
      question: " Can I customize my portfolio to reflect my brand?",
      answer:
        `Yes, Lanepact allows for dynamic and creative customization of portfolios. 
        Users can personalize their portfolios to align with their individual branding and professional identity`,
    },
    {
      question: "Are there templates available for different professions?",
      answer:
        `Absolutely. Lanepact offers a diverse range of templates tailored to various professions, 
        ensuring that every user can find a design that fits their specific field.​`,
    },
    {
      question: "How can I access business packages or enterprise solutions?",
      answer:
       `For business packages and enterprise-level solutions, please contact us directly. 
       Our team will assist you in implementing the appropriate package to meet your organization's needs`,
    },
    {
      question: "Can I download or export my portfolio?",
      answer:
        `Yes, Lanepact allows users to download their personalized portfolios,
         making it convenient to share or present your work offline.​`,
    },
    {
      question: "Is the portfolio responsive and mobile-friendly?",
      answer:
        `Absolutely. Lanepact's templates are designed to be responsive,
         ensuring that your portfolio looks great on all devices, including smartphones and tablets.​`,
    },
    {
      question: "What types of content can I include in my Lanepact portfolio?",
      answer:
        `Lanepact's portfolio creation tool allows you to incorporate various content types, including text, images, videos, and links. 
        This flexibility enables you to showcase your work, skills, and achievements effectively.​`,
    },
    {
      question: " Is there a limit to the number of portfolios I can create?",
      answer:
        `Currently, there is no limit to the number of portfolios you can create on Lanepact.
         You can design multiple portfolios to cater to different audiences or purposes.​`,
    },
    {
      question: "Can I share my portfolio with others?",
      answer:
        `Yes, once you've created your portfolio, you can share it via a unique URL. 
        This makes it easy to distribute your portfolio to potential employers, clients, or collaborators.​`,
    },
    {
      question: "How secure is my data on Lanepact?",
      answer:
        `Lanepact prioritizes user data security. 
        The platform employs industry-standard security measures to protect your information and ensure your portfolios are safe.`,
    },
    {
      question: "Can I collaborate with others on a portfolio?",
      answer:
        `At this time, Lanepact's portfolio creation tool is designed for individual use. 
        However, for collaborative or team-based portfolio needs, please contact us to discuss potential solutions.​`,
    },
  ];

  return (
    <div className="relative lg:top-[98px] w-[100%] flex flex-col flex-wrap items-center justify-center ">
      <h2 className="text-lg font-medium lg:text-3xl text-gray-200 w-[100%] lg:w-[58%]">
        Questions you may have
      </h2>
      <div className="overflow-y-scroll h-[60vh]  w-[100%] lg:w-[60%] pe-8 ">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="py-12 px-4 border border-gray-900 rounded-[40px] w-full lg:w-[100%] mt-8  "
          >
            <button
              className="flex text-xl text-black-200 justify-between w-full "
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-sm lg:text-lg font-medium px-4 ">
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
                    className={`transform origin-center transition duration-200 ease-out ${
                      accordianOpen && "!rotate-180"
                    }`}
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
                    width="15"
                    height="15"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform origin-center transition duration-200 ease-out ${
                      accordianOpen && "!rotate-180"
                    }`}
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
              <div className="text-gray-500 leading-6 mt-4 text-start text-sm py-4 px-4 lg:w-[100%] overflow-hidden ">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
