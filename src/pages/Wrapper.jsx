import Home from "./Home";
import Header from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Wrapper() {
  return (
    <>
      <main className="bg-gray-800 bg-repeat relative h-screen">
        {/* 헤더 */}
        <Header />
        {/* 내용 */}
        <div className="bg-gray-800 relative z-20 items-center flex flex-col w-full">
          <Home name="home" />
          <About name="about" />
          <Skills name="skills" />
          <Projects />
        </div>
        <div className="fixed bottom-0 z-30 w-full">
          <div className="container relative flex h-full mx-auto">
            {/* 링크 */}
            <div className="absolute bottom-0 items-center hidden mt-auto text-white left-0 md:flex md:flex-col">
              <div className="w-8 h-8 mb-4">
                <a
                  href="https://github.com/rmfhsep"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="text-white transition-all duration-300 ease-in-out transform translate-y-0 dark:opacity-50 fill-current dark:hover:opacity-100 hover:-translate-y-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 6a6 6 0 00-1.896 11.693c.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615A5.782 5.782 0 0112 8.901c.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288A6 6 0 0012 6z"></path>
                  </svg>
                </a>
              </div>
              <div className="w-8 h-8 mb-4">
                <a
                  href="mailto:rmfhsep@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="text-white transition-all duration-300 ease-in-out transform translate-y-0 dark:opacity-50 fill-current dark:hover:opacity-100 hover:-translate-y-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="32"
                    height="32"
                  >
                    <path d="M 6 7.03125 C 5.691406 7.03125 5.402344 7.089844 5.125 7.175781 L 8.039063 9.03125 L 23.960938 9.03125 L 26.875 7.175781 C 26.597656 7.089844 26.308594 7.03125 26 7.03125 Z M 4.113281 7.71875 C 3.4375 8.269531 3 9.097656 3 10.03125 L 3 23.03125 C 3 24.683594 4.347656 26.03125 6 26.03125 L 26 26.03125 C 27.652344 26.03125 29 24.683594 29 23.03125 L 29 10.03125 C 29 9.097656 28.5625 8.269531 27.886719 7.71875 L 16 15.28125 Z M 6 12.445313 L 16 18.8125 L 26 12.445313 L 26 24.03125 L 6 24.03125 Z" />
                  </svg>
                </a>
              </div>
              <div className="w-8 h-8 mb-4">
                <a
                  href="http://www.linkedin.com/in/daniel-cranney"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="text-white transition-all duration-300 ease-in-out transform translate-y-0 dark:opacity-50 fill-current dark:hover:opacity-100 hover:-translate-y-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="32"
                    height="32"
                  >
                    <path
                      className="stroke-2"
                      d="M480 288h-128c-8.836 0-16 7.164-16 16S343.2 320 352 320h128c8.836 0 16-7.164 16-16S488.8 288 480 288zM192 256c35.35 0 64-28.65 64-64S227.3 128 192 128S128 156.7 128 192S156.7 256 192 256zM192 160c17.64 0 32 14.36 32 32S209.6 224 192 224S160 209.6 160 192S174.4 160 192 160zM224 288H160c-44.18 0-80 35.82-80 80C80 376.8 87.16 384 96 384s16-7.164 16-16C112 341.5 133.5 320 160 320h64c26.51 0 48 21.49 48 48c0 8.836 7.164 16 16 16s16-7.164 16-16C304 323.8 268.2 288 224 288zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM544 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32V416zM480 224h-128c-8.836 0-16 7.164-16 16S343.2 256 352 256h128c8.836 0 16-7.164 16-16S488.8 224 480 224zM480 160h-128c-8.836 0-16 7.164-16 16S343.2 192 352 192h128c8.836 0 16-7.164 16-16S488.8 160 480 160z"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-0.5 bg-white h-24 opacity-20 mt-2"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
