import React from "react";
import { useState } from "react";

export default function Projects() {
  return (
    <>
      <div className="container p-16 flex relative min-h-screen">
        <div className="w-full flex flex-col relative z-20">
          <h1 className="font-bebas-neue  text-5xl font-black flex flex-col  text-white ">
            My Projects
          </h1>
          <hr className="bg-indigo-500 w-40 h-1.5 mt-4 mb-6 border-0"></hr>
          <div className="w-full flex flex-col justify-center mt-10">
            <div className="flex w-full p-3.5 bg-gray-700 rounded-md shadow-md shadow-light/10">
              <div className="w-3/5 flex justify-center items-center">
                <div className="w-11/12 flex flex-col rounded-md border-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1376 80"
                    class="w-full text-white border-b fill-current border-soft rounded-tl-md rounded-tr-md"
                  >
                    <g data-name="TOP BAR">
                      <rect
                        class="text-white fill-current"
                        width="1376"
                        height="80"
                      ></rect>
                    </g>
                    <g
                      id="e4be1403-7313-4ecc-a32c-26c731d8a560"
                      data-name="BUTTONS"
                    >
                      <circle
                        class="text-red-400 fill-current"
                        cx="37"
                        cy="40"
                        r="11"
                      ></circle>
                      <circle
                        class="text-yellow-400 fill-current"
                        cx="71"
                        cy="40"
                        r="11"
                      ></circle>
                      <circle
                        class="text-green-400 fill-current"
                        cx="105"
                        cy="40"
                        r="11"
                      ></circle>
                    </g>
                  </svg>
                  <img src="./images/문고리.gif" />
                </div>
              </div>
              <div className="w-2/5">하이</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
