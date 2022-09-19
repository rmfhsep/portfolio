import React from "react";
import styled from "styled-components";

const AnimationWrapper = styled.div`
  display: grid;
  place-items: start;
`;

const Typing = styled.div`
  width: 15ch;
  animation: typing 2.5s steps(23), blink 2s step-end infinite alternate;
  animation-iteration-count: infinite;
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

export default function Home() {
  return (
    <>
      <div className="container p-16 flex relative">
        <div className="flex flex-col relative z-20">
          <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
          <h2 className="text-indigo-700">Hello!👋 My name is</h2>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-white">
            Jung Hoon Kim
          </h1>
          <AnimationWrapper>
            <Typing className="text-gray-300 sm:text-5xl">
              Frontend Developer.
            </Typing>
          </AnimationWrapper>
          {/* <span className="text-gray-300 sm:text-5xl">Frontend Developer</span> */}
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>
          <div className="flex mt-8">
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
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <img
            src="/images/object/10.png"
            className="max-w-xs md:max-w-sm m-auto"
          />
        </div>
      </div>
    </>
  );
}
