import React from "react";
import { forwardRef } from "react";

function Footer({ props }, ref) {
  return (
    <>
      <div ref={ref} className="container p-16 flex relative ">
        <div className="w-full flex flex-col relative z-20">
          <h1 className="font-bebas-neue  text-5xl font-black flex flex-col  text-white ">
            Contact
          </h1>
          <hr className="bg-indigo-500 w-40 h-1.5 mt-4 mb-6 border-0"></hr>
          <div className="w-full flex flex-col justify-center mt-10">
            <p style={{ color: "#a2a6a1" }} class="text-lg">
              문제 해결을 위해 항상 고민하며, 꾸준히 매일 매일 성장하는 개발자
              김정훈입니다.
              <br />
            </p>
            <a
              href="mailto:rmfhsep@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-500 text-xl hover:text-white hover:cursor-pointer hover:underline underline-offset-4 decoration-indigo-500"
            >
              rmfhsep@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default forwardRef(Footer);
