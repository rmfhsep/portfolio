import React from "react";
import { forwardRef } from "react";

function About({ props }, ref) {
  return (
    <>
      <div ref={ref} className="container p-16 flex relative min-h-screen">
        <div className="flex flex-col relative z-20">
          <h1 className="font-bebas-neue  text-5xl font-black flex flex-col  text-white ">
            About
          </h1>
          <hr className="bg-indigo-500 w-40 h-1.5 mt-4 mb-6 border-0"></hr>
          <div className="flex flex-col-reverse items-start lg:flex-row pt-10 w-full">
            {" "}
            <div
              className="w-full mr-10"
              // style={{ width: "60%", marginRight: "20px" }}
            >
              <p
                className="text-base sm:text-xl mb-8 break-keep"
                style={{ color: "#a2a6a1" }}
              >
                디자이너로써 개발자와 협업하는 기회가 있었습니다. <br />그 때
                "내가 디자인한 것을 직접 개발하면 얼마나 좋을까" 라는 생각이
                저를 설레게 하였습니다.
              </p>
              <p
                className="text-base sm:text-xl my-8 break-keep"
                style={{ color: "#a2a6a1" }}
              >
                그 설렘은 저에게 개발에 대한 열정을 갖게 해 주었고, <br />
                지금의 저를 만들어 주었습니다.
              </p>
              <p
                className="text-base sm:text-xl my-8 break-keep"
                style={{ color: "#a2a6a1" }}
              >
                문제에 직면하는 것을 두려워 하지 않고, <br />그 문제를 해결하기
                위한 방법을 고민하는 개발자가 되기 위해 항상 고민합니다.
                <br />
                문제 해결을 위한 새로운 기술 도입을 적극 환영합니다.
              </p>
              <p
                className="ttext-base sm:text-xl  my-8 break-keep"
                style={{ color: "#a2a6a1" }}
              >
                늘 열린 생각으로 소통하며, 하나의 팀으로 일할 때 가장 큰 성과를
                낼 수 있다고 생각합니다. <br />
                팀의 목적 달성을 위해 상황에 맞게 유연하게 대응하고 <br /> 목표
                달성을 위해서라면 끈기 있게 문제를 파고들어 해결하려고
                노력합니다.
              </p>
            </div>
            <div className="w-full mb-10">
              <img src="/images/profile.png" className="rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default forwardRef(About);
