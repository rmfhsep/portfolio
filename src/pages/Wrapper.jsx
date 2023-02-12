import Home from "./Home";
import Header from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";
import { forwardRef, useRef } from "react";
import Works from "./Works";

function Wrapper() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const worksRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const handleClick = (type) => {
    const headerOffset = 64;
    let elementPosition;
    if (type === "home") {
      elementPosition = homeRef.current.offsetTop - headerOffset;
    } else if (type === "about") {
      elementPosition = aboutRef.current.offsetTop - headerOffset;
    } else if (type === "skills") {
      elementPosition = skillsRef.current.offsetTop - headerOffset;
    } else if (type === "works") {
      elementPosition = worksRef.current.offsetTop - headerOffset;
    } else if (type === "projects") {
      elementPosition = projectsRef.current.offsetTop - headerOffset;
    } else {
      elementPosition = contactRef.current.offsetTop - headerOffset;
    }
    const offsetPosition = elementPosition;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main
        className="bg-gray-800 bg-repeat relative h-screen"
        style={{ minWidth: "500px" }}
      >
        {/* 헤더 */}
        <Header handleClick={handleClick} />
        {/* 내용 */}
        <div className="bg-gray-800 relative z-20 items-center flex flex-col w-full snap-y">
          <Home ref={homeRef} name="home" />
          <About ref={aboutRef} name="about" />
          <Skills ref={skillsRef} name="skills" />
          {/* <Works ref={worksRef} name="works" /> */}
          <Projects ref={projectsRef} name="projects" />
          <Contact ref={contactRef} name="contact" />

          <Footer />
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
                  href="https://adventurous-bangle-8ec.notion.site/7265e5dd7ea648039fef0656b704bf12"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white transition-all duration-300 ease-in-out transform translate-y-0 dark:opacity-50 fill-current dark:hover:opacity-100 hover:-translate-y-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="32"
                    height="32"
                  >
                    <path d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" />
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
export default forwardRef(Wrapper);
