export default function Wrapper() {
  return (
    <>
      <main className="bg-gray-800 relative overflow-hidden h-screen">
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
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Be on
                <span className="text-5xl sm:text-7xl">Time</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
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
        </div>
      </main>
    </>
  );
}
