import Home from "./Home";
import Header from "../components/Header";
import About from "./About";

export default function Wrapper() {
  return (
    <>
      <main className="bg-gray-800 bg-repeat relative h-screen">
        {/* 헤더 */}
        <Header />
        {/* 내용 */}
        <div className="bg-gray-800 relative z-20 items-center flex flex-col ">
          <Home name="home" />
          <About name="about" />
        </div>
      </main>
    </>
  );
}
