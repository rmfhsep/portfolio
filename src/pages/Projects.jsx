import React, { forwardRef, useEffect, useState } from "react";
import { useRef } from "react";
// Todo. 작은화면일 때 flex col 로 바꾸기.
function Projects({ props }, ref) {
    const [isVisible, setIsVisible] = useState(false);
    const aniRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref.current);
          }
        },
        {
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
  return (
    <>
      <div
        ref={ref}
        className="container p-16 flex relative min-h-screen scroll-my-0.5"
      >
        <div className="w-full flex flex-col relative z-20">
          <h1 className="font-bebas-neue text-5xl font-black flex flex-col  text-white">
            My Projects
          </h1>
          <hr className="bg-indigo-500 w-40 h-1.5 mt-4 mb-6 border-0"></hr>
          <div
            className={`w-full flex flex-col justify-center mt-10 ${
              isVisible ? "animate-fadeIn opacity-100" : "opacity-0"
            } transition-opacity ${isVisible ? "duration-1000" : ""}`}
          >
            {/* 첫번째 */}
            <div className="mt-10 flex flex-col md:flex-row box-border w-full p-3.5 bg-gray-700 rounded-md shadow-md shadow-light/10">
              <div className="md:w-3/5 w-full box-border flex justify-center items-center">
                <div className="w-9/12 mt-10 mb-10 flex flex-col rounded-md border-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1376 80"
                    className="w-full text-white border-b fill-current border-soft rounded-tl-md rounded-tr-md"
                  >
                    <g data-name="TOP BAR">
                      <rect
                        className="text-white fill-current"
                        width="1376"
                        height="80"
                      ></rect>
                    </g>
                    <g
                      id="e4be1403-7313-4ecc-a32c-26c731d8a560"
                      data-name="BUTTONS"
                    >
                      <circle
                        className="text-red-400 fill-current"
                        cx="37"
                        cy="40"
                        r="11"
                      ></circle>
                      <circle
                        className="text-yellow-400 fill-current"
                        cx="71"
                        cy="40"
                        r="11"
                      ></circle>
                      <circle
                        className="text-green-400 fill-current"
                        cx="105"
                        cy="40"
                        r="11"
                      ></circle>
                    </g>
                  </svg>
                  <img
                    style={{ height: "250px" }}
                    src="./images/portfolio.gif"
                  />
                </div>
              </div>
              <div className="md:w-2/5 w-full flex justify-center">
                <div className="mt-4">
                  <p className="text-indigo-400 text-sm sm:text-base font-semibold">
                    Personal Project
                  </p>
                  <p className="text-white text-2xl sm:text-4xl font-bold">
                    Portfolio
                  </p>
                  <hr className="bg-indigo-500 w-28 h-1.5 mt-4 mb-6 border-0"></hr>
                  <div className="flex sm:flex-col flex-row">
                    <div className="flex items-center">
                      <div className="sm:w-12 w-10">
                        <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                          <path
                            className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                            d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"
                          ></path>
                        </svg>
                      </div>
                      <p
                        style={{ color: "#a2a1a6" }}
                        className="text-sm sm:text-base font-semibold tracking-wide hidden sm:block"
                      >
                        HTML
                      </p>
                      <div className="sm:w-12 w-10 sm:ml-3 ml-0">
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
                        className="ml-2 text-sm sm:text-base font-semibold tracking-wide hidden sm:block"
                      >
                        Tailwind
                      </p>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="sm:w-12 w-10">
                        <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                          <g className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current">
                            <circle cx="64" cy="64" r="11.4"></circle>
                            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                          </g>
                        </svg>
                      </div>
                      <p
                        style={{ color: "#a2a1a6" }}
                        className="ml-2 text-sm sm:text-base font-semibold tracking-wide hidden sm:block"
                      >
                        React
                      </p>
                      <div className="sm:w-12 sm:ml-6 w-10 ml-1">
                        <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                          <path
                            className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                            d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
                          ></path>
                        </svg>
                      </div>
                      <p
                        style={{ color: "#a2a1a6" }}
                        className="ml-2 text-sm sm:text-base font-semibold tracking-wide hidden sm:block"
                      >
                        Javascript
                      </p>
                    </div>
                  </div>

                  <p
                    style={{ color: "#a2a1a6" }}
                    className="text-sm sm:text-base mt-10 break-keep"
                  >
                    개인 포트폴리오 사이트
                  </p>
                  <div className="flex">
                    <a target="_blank" href="https://junghoon-portfolio.com">
                      <button className="mt-4 h-10 p-3 inline-flex items-center rounded-md hover:-translate-y-1 hover:bg-opacity-40 bg-gray-800 group">
                        <svg
                          style={{ color: "a2a1a6" }}
                          className="w-6 h-6 mr-2 dark:opacity-50 opacity-70 group-hover:opacity-100"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                        <p
                          style={{ color: "#a2a1a6" }}
                          className="font-semibold opacity-70 group-hover:opacity-100"
                        >
                          Live
                        </p>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* 두번째 */}
            <div className="mt-10 flex flex-col md:flex-row box-border w-full p-3.5 bg-gray-700 rounded-md shadow-md shadow-light/10">
              <div className="md:w-3/5 w-full box-border flex justify-center items-center">
                <div className="w-9/12 mt-10 mb-10 flex flex-col rounded-md border-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1376 80"
                    className="w-full text-white border-b fill-current border-soft rounded-tl-md rounded-tr-md"
                  >
                    <g data-name="TOP BAR">
                      <rect
                        className="text-white fill-current"
                        width="1376"
                        height="80"
                      ></rect>
                    </g>
                    <g
                      id="e4be1403-7313-4ecc-a32c-26c731d8a560"
                      data-name="BUTTONS"
                    >
                      <circle
                        className="text-red-400 fill-current"
                        cx="37"
                        cy="40"
                        r="11"
                      ></circle>
                      <circle
                        className="text-yellow-400 fill-current"
                        cx="71"
                        cy="40"
                        r="11"
                      ></circle>
                      <circle
                        className="text-green-400 fill-current"
                        cx="105"
                        cy="40"
                        r="11"
                      ></circle>
                    </g>
                  </svg>
                  <img style={{ height: "250px" }} src="./images/문고리.gif" />
                </div>
              </div>
              <div className="md:w-2/5 w-full flex justify-center">
                <div className="mt-4">
                  <p className="text-indigo-400 text-sm sm:text-base font-semibold">
                    Team Project
                  </p>
                  <p className="text-white text-2xl sm:text-4xl font-bold">
                    moongori
                  </p>
                  <hr className="bg-indigo-500 w-28 h-1.5 mt-4 mb-6 border-0"></hr>
                  <div className="flex sm:flex-col flex-row">
                    <div className="flex items-center">
                      <div className="sm:w-12 w-10">
                        <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                          <path
                            className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                            d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"
                          ></path>
                        </svg>
                      </div>
                      <p
                        style={{ color: "#a2a1a6" }}
                        className="text-sm sm:text-base font-semibold tracking-wide hidden sm:block"
                      >
                        HTML
                      </p>
                      <div className="sm:w-12 w-10 sm:ml-3 ml-0">
                        <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                          <path
                            className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                            d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063L108.33 26H19.67zm69.21 50.488L86.53 98.38l.009 1.875L64 106.55v.001l-.018.015-22.719-6.225L39.726 83h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495L77.702 77H51.795l-.222-2.355-.506-5.647L50.802 66h27.886l1.014-11H37.229l-.223-2.589-.506-6.03L36.235 43h55.597l-.267 3.334-2.685 30.154M89 14.374L81.851 6H89V1H73v4.363L81.39 13H73v5h16zm-19 0L63.193 6H70V1H55v4.363L62.733 13H55v5h15zM52 13h-8V6h8V1H38v17h14z"
                          ></path>
                        </svg>
                      </div>
                      <p
                        style={{ color: "#a2a1a6" }}
                        className="text-sm sm:text-base font-semibold tracking-wide hidden sm:block"
                      >
                        CSS
                      </p>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="sm:w-12 w-10">
                        <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                          <g className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current">
                            <circle cx="64" cy="64" r="11.4"></circle>
                            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                          </g>
                        </svg>
                      </div>
                      <p
                        style={{ color: "#a2a1a6" }}
                        className="ml-2 text-sm sm:text-base font-semibold tracking-wide hidden sm:block"
                      >
                        React
                      </p>
                      <div className="sm:w-12 sm:ml-6 w-10 ml-1">
                        <svg style={{ color: "#a2a1a6" }} viewBox="0 0 128 128">
                          <path
                            className="dark:text-light text-mid transition-all duration-200 ease-in-out fill-current"
                            d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
                          ></path>
                        </svg>
                      </div>
                      <p
                        style={{ color: "#a2a1a6" }}
                        className="ml-2 text-sm sm:text-base font-semibold tracking-wide hidden sm:block"
                      >
                        Javascript
                      </p>
                    </div>
                  </div>
                  <p
                    style={{ color: "#a2a1a6" }}
                    className="text-sm sm:text-base mt-10 break-keep"
                  >
                    기존 중고거래의 불편함을 해소하기 위한 <br />
                    위치 기반 경매 플랫폼
                  </p>
                  <div className="flex">
                    <a
                      target="_blank"
                      href="https://codestates.notion.site/16-The-Moon-moongori-3d9037535f4d40968c7e953a91a9e542"
                    >
                      <button className="mt-4 h-10 p-3 inline-flex items-center rounded-md hover:-translate-y-1 hover:bg-opacity-40 bg-gray-800 group">
                        <svg
                          style={{ color: "a2a1a6" }}
                          className="w-6 h-6 mr-2 dark:opacity-50 opacity-70 group-hover:opacity-100"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                        <p
                          style={{ color: "#a2a1a6" }}
                          className="font-semibold opacity-70 group-hover:opacity-100"
                        >
                          Notion
                        </p>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default forwardRef(Projects);
