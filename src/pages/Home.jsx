import React from "react";
import { forwardRef } from "react";
import styled from "styled-components";

const AnimationWrapper = styled.div`
  display: grid;
  place-items: start;
`;

const Typing = styled.div`
  width: 14.5ch;
  animation: typing 2.5s steps(23), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 2em;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

function Home({ props }, ref) {
  return (
    <>
      <div
        ref={ref}
        className="container p-16 flex relative items-center min-h-screen"
      >
        <div className="flex flex-col relative z-20">
          <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
          <h2 className="text-indigo-700 text-xl">Hello!👋 My name is</h2>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-white">
            Jung Hoon Kim
          </h1>
          <AnimationWrapper>
            <Typing className="text-gray-300 sm:text-5xl">
              Frontend Developer.
            </Typing>
          </AnimationWrapper>
          {/* <span className="text-gray-300 sm:text-5xl">Frontend Developer</span> */}
          <p
            style={{ color: "#a2a6a1" }}
            className="text-sm sm:text-base my-8 break-keep"
          >
            꾸준히 성장하자는 모토를 가지고, 항상 학습하며 배울 수 있는 것을
            찾기를 즐깁니다. <br />
            꾸준함이 성장하는 습관을 만들어 나갈 수 있다고 믿고 실천하고
            있습니다. <br />
            <br />
            문제를 발견하면, 끝까지 해결하려고 노력하는 끈기 있는 개발자
            김정훈입니다. <br />
            함께 배우며 성장하기 위해 커뮤니케이션을 무엇보다 중요시 합니다.{" "}
            <br />
            <br />
            오늘도 한 걸음 한 걸음 성장해 나가고 있습니다.
          </p>
          {/* <div className="flex mt-8">
            <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
            >
              Get started
            </a>
            <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
            >
              Read more
            </a>
          </div> */}
        </div>
        {/* <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <img
            src="/images/object/10.png"
            className="max-w-xs md:max-w-sm m-auto"
          />
        </div> */}
      </div>
    </>
  );
}
export default forwardRef(Home);
