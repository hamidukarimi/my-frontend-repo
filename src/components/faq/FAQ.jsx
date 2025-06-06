import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import { backgrounds, icons } from "@/assets/images";


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]); // To get the height of each accordion body

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Header />

      <div className="relative  nowex min-h-[400px] h-auto " style={{ backgroundImage: `url(${backgrounds.faqBG})` }}>
      <div className="hero-overlay w-full h-full  absolute top-0 z-10"></div>


      <div className="hero-content px-4 relative pt-24 bottom-5   text-white z-30 ">
        <p className="text-[43px]  font-bold leading-tight">
          We'r here to help you with anything and anytime on this page
        </p>
      </div>
      </div>

      

      <div className="relative px-5">
        <input
          className="w-full pl-5 pr-14 py-4 mt-5 rounded-[30px] text-white text-xl bg-black border border-ourOrange outline-none"
          placeholder="What Is On Your Mind?"
        />
        <span className="absolute right-10 top-9 ">
          <img className="w-[32px] " src={icons.search2} />
        </span>
      </div>

      <div className="px-5 py-10">
        <p className="text-[26px] font-bold mb-5">FAQ</p>

        <div>
          <div className="accordion space-y-2">
            {/* Accordion Item #1 */}
            <div className="border border-gray-700 rounded">
              <h2 className="accordion-header">
              <button
                  className="accordion-button   text-start text-gray-100 px-3 py-3 text-lg  w-full flex items-center justify-between border-b border-gray-700"
                  onClick={() => toggleAccordion(1)}
                >
                  How to enroll to a course
                  <svg
                    className={`w-9 h-9 transform transition-transform ${
                      openIndex === 1 ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 8l4 4 4-4"></path>
                  </svg>
                </button>
              </h2>
              <div
                ref={(el) => (contentRefs.current[1] = el)}
                className={`accordion-collapse overflow-hidden transition-all duration-300 ${
                  openIndex === 1 ? "max-h-[500px]" : "max-h-0"
                }`}
                style={{
                  maxHeight:
                    openIndex === 1
                      ? `${contentRefs.current[1]?.scrollHeight}px`
                      : "0",
                }}
              >
                <div className="accordion-body px-4 py-2  text-lg text-gray-200">
                  Lorem Ispum doler amit sit for more things, doler sign here do
                  lorem ispum amit sit assignment, here do somethign more things
                  here do amit sit do lorem ispum doler sign asit amit do doler
                  euro sign for more details.
                </div>
              </div>
            </div>

            {/* Accordion Item #2 */}
            <div className="border border-gray-700 rounded">
              <h2 className="accordion-header">
                <button
                  className="accordion-button   text-start text-gray-100 px-3 py-3 text-lg  w-full flex items-center justify-between border-b border-gray-700"
                  onClick={() => toggleAccordion(2)}
                >
                  Can I access course materials offline?
                  <svg
                    className={`w-9 h-9 transform transition-transform ${
                      openIndex === 2 ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 8l4 4 4-4"></path>
                  </svg>
                </button>
              </h2>
              <div
                ref={(e2) => (contentRefs.current[2] = e2)}
                className={`accordion-collapse overflow-hidden transition-all duration-300 ${
                  openIndex === 2 ? "max-h-[500px]" : "max-h-0"
                }`}
                style={{
                  maxHeight:
                    openIndex === 2
                      ? `${contentRefs.current[2]?.scrollHeight}px`
                      : "0",
                }}
              >
                <div className="accordion-body px-4 py-2   text-lg text-gray-200">
                  Lorem Ispum doler amit sit for more things, doler sign here do
                  lorem ispum amit sit assignment, here do somethign more things
                  here do amit sit do lorem ispum doler sign asit amit do doler
                  euro sign for more details.
                </div>
              </div>
            </div>


                {/* 3 */}
            <div className="border border-gray-700 rounded">
              <h2 className="accordion-header">
              <button
                  className="accordion-button   text-start text-gray-100 px-3 py-3 text-lg  w-full flex items-center justify-between border-b border-gray-700"
                  onClick={() => toggleAccordion(3)}
                >
                  Are certificates provided upon course completion?
                  <svg
                    className={`w-9 h-9 transform transition-transform ${
                      openIndex === 3 ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 8l4 4 4-4"></path>
                  </svg>
                </button>
              </h2>
              <div
                ref={(e3) => (contentRefs.current[3] = e3)}
                className={`accordion-collapse overflow-hidden transition-all duration-300 ${
                  openIndex === 3 ? "max-h-[500px]" : "max-h-0"
                }`}
                style={{
                  maxHeight:
                    openIndex === 3
                      ? `${contentRefs.current[3]?.scrollHeight}px`
                      : "0",
                }}
              >
                <div className="accordion-body px-4 py-2 text-lg text-gray-200">
                  Lorem Ispum doler amit sit for more things, doler sign here do
                  lorem ispum amit sit assignment, here do somethign more things
                  here do amit sit do lorem ispum doler sign asit amit do doler
                  euro sign for more details.
                </div>
              </div>
            </div>


             {/* 3 */}
             <div className="border border-gray-700 rounded">
              <h2 className="accordion-header">
              <button
                  className="accordion-button   text-start text-gray-100 px-3 py-3 text-lg  w-full flex items-center justify-between border-b border-gray-700"
                  onClick={() => toggleAccordion(4)}
                >
                  Are the courses self-paced or scheduled?
                  <svg
                    className={`w-9 h-9 transform transition-transform ${
                      openIndex === 4 ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 8l4 4 4-4"></path>
                  </svg>
                </button>
              </h2>
              <div
                ref={(e4) => (contentRefs.current[4] = e4)}
                className={`accordion-collapse overflow-hidden transition-all duration-300 ${
                  openIndex === 4 ? "max-h-[500px]" : "max-h-0"
                }`}
                style={{
                  maxHeight:
                    openIndex === 4
                      ? `${contentRefs.current[3]?.scrollHeight}px`
                      : "0",
                }}
              >
                <div className="accordion-body px-4 py-2 text-lg text-gray-200">
                  Lorem Ispum doler amit sit for more things, doler sign here do
                  lorem ispum amit sit assignment, here do somethign more things
                  here do amit sit do lorem ispum doler sign asit amit do doler
                  euro sign for more details.
                </div>
              </div>
            </div>
            
            <div className="text-center pt-8 pb-20">
            <p className="text-2xl font-bold mb-4">Still stuck? Help us a mail away</p>
            <Link to="/contact-page">
            <button className="w-full bg-ourOrange p-3 rounded-md">Send a message</button>
            </Link>

            </div>


          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
