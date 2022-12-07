import React from "react";
import { useState } from "react";

export default function Footer() {
  return (
    <>
      <div className="container p-16 flex relative ">
        <div className="w-full flex flex-col relative z-20">
          <h1 className="font-bebas-neue  text-5xl font-black flex flex-col  text-white ">
            Contact
          </h1>
          <hr className="bg-indigo-500 w-40 h-1.5 mt-4 mb-6 border-0"></hr>
          <div className="w-full flex flex-col justify-center mt-10">
            <p style={{ color: "#a2a6a1" }} class="text-lg">
              꾸준히 성장해 나가며, 문제를 해결하는 개발자가 되기 위해
              노력합니다.
              <br />
              rmfhsep@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
