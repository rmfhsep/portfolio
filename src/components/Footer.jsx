import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container p-16 flex relative ">
        <div className="w-full flex flex-col relative z-20">
          <hr className="w-full h-1 mb-16 bg-gray-700 border-0 opacity-50"></hr>
          <div className="w-full flex flex-col justify-center mt-10">
            <svg
              id="abbe8588-8b21-44fd-a605-eb7de7f82941"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 93.13 75.2"
              width="32"
            >
              <path
                className="opacity-20 fill-current text-white fill-brand"
                d="M24.05,38.51,7.5,55.06a4.39,4.39,0,1,1-6.21-6.21L14.74,35.41,1.29,22A4.39,4.39,0,0,1,7.5,15.75L24.05,32.3A4.4,4.4,0,0,1,24.05,38.51Z"
              ></path>
              <path
                className="opacity-20 fill-current text-white fill-brand"
                d="M91.85,55.06a4.38,4.38,0,0,1-6.21,0L69.09,38.51a4.4,4.4,0,0,1,0-6.21L85.64,15.75A4.39,4.39,0,0,1,91.85,22L78.41,35.41,91.85,48.85A4.4,4.4,0,0,1,91.85,55.06Z"
              ></path>
              <rect
                className="opacity-20 fill-current text-white fill-brand"
                x="41.93"
                y="-1.17"
                width="8.78"
                height="77.54"
                rx="4.39"
                transform="translate(11.31 -10.71) rotate(15)"
              ></rect>
            </svg>
            <p style={{ color: "#7e7e7e" }} className="text-base mt-3">
              © 2022 - Junghoon Kim. <br />
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
