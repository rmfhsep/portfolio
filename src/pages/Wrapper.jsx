import Home from "./Home";
import Header from "../components/Header";

export default function Wrapper() {
  return (
    <>
      <main className="bg-gray-800 relative overflow-hidden h-screen">
        {/* 헤더 */}
        <Header />
        {/* 내용 */}
        <div className="bg-gray-800 flex relative z-20 items-center overflow-hidden h-screen">
          <Home />
        </div>
      </main>
    </>
  );
}
