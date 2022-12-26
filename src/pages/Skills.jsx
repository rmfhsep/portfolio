import React, { forwardRef } from "react";
import { useState } from "react";

function Skills({ props }, ref) {
  return (
    <>
      <div ref={ref} className="container p-16 flex relative min-h-screen">
        <div className="w-full flex flex-col relative z-20">
          <h1 className="font-bebas-neue  text-5xl font-black flex flex-col  text-white ">
            Skills
          </h1>
          <hr className="bg-indigo-500 w-40 h-1.5 mt-4 mb-6 border-0"></hr>
          <div className="w-full flex justify-center mt-10">
            <div className="w-1/5 items-center flex justify-start p-0 flex-col mb-4 mr-0 h-28 sm:h-auto">
              <div className="w-16 sm:w-28 h-16 sm:h-20 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0">
                <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                  <path
                    className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                    d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"
                  ></path>
                </svg>
              </div>
              <p
                style={{ color: "#a2a1a6" }}
                className="mt-4 sm:mt-10 text-sm sm:text-base font-semibold tracking-wide opacity-100 normal-case text-center"
              >
                HTML
              </p>
            </div>
            <div className="w-1/5 items-center flex justify-start p-0 flex-col mb-4 mr-0 h-28 sm:h-auto">
              <div className="w-16 sm:w-28 h-16 sm:h-20 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0">
                <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                  <path
                    className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                    d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063L108.33 26H19.67zm69.21 50.488L86.53 98.38l.009 1.875L64 106.55v.001l-.018.015-22.719-6.225L39.726 83h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495L77.702 77H51.795l-.222-2.355-.506-5.647L50.802 66h27.886l1.014-11H37.229l-.223-2.589-.506-6.03L36.235 43h55.597l-.267 3.334-2.685 30.154M89 14.374L81.851 6H89V1H73v4.363L81.39 13H73v5h16zm-19 0L63.193 6H70V1H55v4.363L62.733 13H55v5h15zM52 13h-8V6h8V1H38v17h14z"
                  ></path>
                </svg>
              </div>
              <p
                style={{ color: "#a2a1a6" }}
                className="mt-4 sm:mt-10 text-sm sm:text-sm font-semibold tracking-wide opacity-100 normal-case text-center"
              >
                CSS
              </p>
            </div>
            <div className="w-1/5 items-center flex justify-start p-0 flex-col mb-4 mr-0 h-28 sm:h-auto">
              <div className="w-16 sm:w-28 h-16 sm:h-20 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0">
                <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                  <path
                    className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="#38b2ac"
                  ></path>
                </svg>
              </div>
              <p
                style={{ color: "#a2a1a6" }}
                className="mt-4 sm:mt-10  text-sm sm:text-sm font-semibold tracking-wide opacity-100 normal-case text-center"
              >
                Tailwind
              </p>
            </div>
            <div className="w-1/5 items-center flex justify-start p-0 flex-col mb-4 mr-0 h-28 sm:h-auto">
              <div className="w-16 sm:w-28 h-16 sm:h-20 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0">
                <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                  <path
                    className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                    d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
                  ></path>
                </svg>
              </div>
              <p
                style={{ color: "#a2a1a6" }}
                className="mt-4 sm:mt-10  text-sm sm:text-sm font-semibold tracking-wide opacity-100 normal-case text-center"
              >
                Javascript
              </p>
            </div>
            <div className="w-1/5 items-center flex justify-start p-0 flex-col mb-4 mr-0 h-28 sm:h-auto">
              <div className="w-16 sm:w-28 h-16 sm:h-20 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0">
                <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                  <g className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current">
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg>
              </div>
              <p
                style={{ color: "#a2a1a6" }}
                className="mt-4 sm:mt-10 text-sm sm:text-sm font-semibold tracking-wide opacity-100 normal-case text-center"
              >
                React
              </p>
            </div>
          </div>
          {/* ======== */}
          <div className="mt-10 w-full flex justify-center">
            <div className="w-1/5 items-center flex justify-start p-0 flex-col mb-4 mr-0 h-28 sm:h-auto">
              <div className="w-16 sm:w-28 h-16 sm:h-20 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0">
                <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                  <path
                    className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                    d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"
                  ></path>
                </svg>
              </div>
              <p
                style={{ color: "#a2a1a6" }}
                className="mt-4 sm:mt-10 text-sm sm:text-sm font-semibold tracking-wide opacity-100 normal-case text-center"
              >
                Next
              </p>
            </div>
            <div className="w-1/5 items-center flex justify-start p-0 flex-col mb-4 mr-0 h-28 sm:h-auto">
              <div className="w-16 sm:w-28 h-16 sm:h-20 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0">
                <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                  <path
                    className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                    d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                  ></path>
                </svg>
              </div>
              <p
                style={{ color: "#a2a1a6" }}
                className="mt-4 sm:mt-10 text-sm sm:text-sm font-semibold tracking-wide opacity-100 normal-case text-center"
              >
                Node
              </p>
            </div>
            <div className="w-1/5 items-center flex justify-start p-0 flex-col mb-4 mr-0 h-28 sm:h-auto">
              <div className="w-16 sm:w-28 h-16 sm:h-20 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0">
                <svg
                  style={{ color: "#a2a1a6" }}
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                    d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"
                  ></path>
                </svg>
              </div>
              <p
                style={{ color: "#a2a1a6" }}
                className="sm:mt-10 mt-4 text-sm sm:text-sm font-semibold tracking-wide opacity-100 normal-case text-center"
              >
                Express
              </p>
            </div>

            <div className="w-1/5 items-center flex justify-start p-0 flex-col mb-4 mr-0 h-28 sm:h-auto">
              <div className="w-16 sm:w-28 h-16 sm:h-20 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0">
                <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                  <path
                    className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                    d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                  ></path>
                </svg>
              </div>
              <p
                style={{ color: "#a2a1a6" }}
                className="mt-4 sm:mt-10 text-sm sm:text-sm font-semibold tracking-wide opacity-100 normal-case text-center"
              >
                Firebase
              </p>
            </div>
            <div className="w-1/5 items-center flex justify-start p-0 flex-col mb-4 mr-0 h-28 sm:h-auto">
              <div className="w-16 sm:w-28 h-16 sm:h-20 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0">
                <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                  <path
                    className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                    d="M126.216.727C89.993.716 53.932.717 17.708.717 12.527.717 7.257.713 2.076.728 1.748.729 1 .881 1 .964V127h126V.964c0-.083-.414-.237-.784-.237zM113.48 114.666c-32.641-.038-65.271-.03-97.912-.03-1.576 0-1.569-.003-1.569-1.627V15.212C14 13.605 13.984 14 15.577 14h97.798c1.638 0 1.625-.396 1.625 1.291v48.837c0 16.32-.007 32.64.036 48.959.004 1.243-.289 1.58-1.556 1.579zM56.82 39.644c-6.668-1.563-13.38-.792-20.085-.107-1.423.146-1.695.755-1.691 2.018C35.087 56.762 35 71.969 35 87.176V88h9V70.139c5 .375 9.576.286 14.049-1.31 7.169-2.558 10.752-8.111 10.365-16.219-.313-6.548-4.426-11.286-11.594-12.966zm-1.953 22.344c-3.194 1.557-6.59 1.52-10.005 1.058-.266-.036-.675-.511-.677-.784-.04-5.331-.03-10.661-.03-16.138 3.131-.488 6.1-.726 9.062.018 3.673.923 5.804 3.319 6.201 6.917.436 3.954-1.247 7.319-4.551 8.929zm33.301 7.106c-1.469-.805-3.08-1.347-4.606-2.053-1.41-.653-2.833-1.296-4.174-2.076-.935-.543-1.36-1.492-1.36-2.611 0-1.892 1.294-3.417 3.504-3.598 1.649-.135 3.361.035 4.994.34 1.376.256 2.681.899 4.082 1.395l1.767-6.269c-3.345-1.624-6.749-2.235-10.285-2.11-3.006.105-5.814.871-8.352 2.599-4.743 3.229-7.057 11.807.051 16.416 1.805 1.171 3.893 1.905 5.851 2.841 1.218.583 2.489 1.079 3.641 1.772 1.452.874 1.946 2.297 1.694 3.94-.247 1.615-1.33 2.638-2.836 2.874-1.68.264-3.466.435-5.118.144-2.339-.411-4.599-1.281-6.974-1.979-.426 1.59-.831 3.349-1.384 5.06-.303.938-.125 1.401.795 1.768 5.617 2.231 11.334 2.69 17.082.717 4.296-1.475 6.915-4.524 7.256-9.169.332-4.527-1.708-7.851-5.628-10.001z"
                  ></path>
                </svg>
              </div>
              <p
                style={{ color: "#a2a1a6" }}
                className="mt-4 sm:mt-10 text-sm sm:text-sm font-semibold tracking-wide opacity-100 normal-case text-center"
              >
                Photoshop
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default forwardRef(Skills);
