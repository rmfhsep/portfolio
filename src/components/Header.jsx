import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StHeaderMaster = styled.div`
  width: 80vw;
  height: 70px;
  position: fixed;
  opacity: 0.9;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .icon {
    display: none;
    width: 100%;
    color: gray;
    cursor: pointer;
    :hover {
      color: black;
    }
  }
  @media all and (max-width: 768px) {
    .icon {
      display: inline-block;
      justify-content: flex-end;
      margin-left: 80px;
    }
  }
`;

const StLeftHeader = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 800;
  cursor: pointer;
  color: gray;
  :hover {
    color: black;
  }
  @media all and (max-width: 768px) {
    font-size: 1.5rem;
    width: 80%;
  }
`;
const StRightHeader = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StMenuText = styled.nav`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  font-size: 1rem;
  :hover {
    color: black;
  }
  @media all and (max-width: 768px) {
    display: none;
  }
`;

export default function Header(valueHandler, setValue, value) {
  return (
    <>
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-gray-800 dark:text-white font-black text-3xl flex">
            <div class="z-50 w-9 sm:w-12 h-9 sm:h-12 flex items-center">
              <svg
                id="b613d120-e911-4f71-b7bc-d9b9e1bbdc6f"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 93.13 75.2"
              >
                <rect
                  class="fill-current text-brand"
                  x="-3.43"
                  y="39.29"
                  width="32.19"
                  height="8.78"
                  rx="4.39"
                  transform="translate(-27.18 21.75) rotate(-45)"
                ></rect>
                <rect
                  class="fill-current text-brand"
                  x="-3.43"
                  y="22.74"
                  width="32.19"
                  height="8.78"
                  rx="4.39"
                  transform="translate(22.89 -1.01) rotate(45)"
                ></rect>
                <rect
                  class="fill-current text-brand"
                  x="64.37"
                  y="22.74"
                  width="32.19"
                  height="8.78"
                  rx="4.39"
                  transform="translate(156.55 -10.59) rotate(135)"
                ></rect>
                <rect
                  class="fill-current text-brand"
                  x="64.37"
                  y="39.29"
                  width="32.19"
                  height="8.78"
                  rx="4.39"
                  transform="translate(106.48 131.47) rotate(-135)"
                ></rect>
                <rect
                  class="fill-current text-brand"
                  x="41.93"
                  y="-1.17"
                  width="8.78"
                  height="77.54"
                  rx="4.39"
                  transform="translate(11.31 -10.71) rotate(15)"
                ></rect>
              </svg>
            </div>
            <div className="ml-4 items-center flex">
              <p className="">JUNG-HOON</p>
            </div>
          </div>
          <div className="flex items-center">
            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <a href="#" className="py-2 px-6 flex">
                Home
              </a>
              <a href="#" className="py-2 px-6 flex">
                About
              </a>
              <a href="#" className="py-2 px-6 flex">
                Skills
              </a>
              <a href="#" className="py-2 px-6 flex">
                Projects
              </a>
              <a href="#" className="py-2 px-6 flex">
                Contact
              </a>
            </nav>
            <button className="lg:hidden flex flex-col ml-4">
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
