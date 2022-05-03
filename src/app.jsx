import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

const Wrap = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  font-family: "JSDongkang-Regular";
`;

function App() {
  return (
    <BrowserRouter>
      <Wrap>
        {" "}
        <Header />
        <Home />
        <About />
        <Footer />
      </Wrap>
    </BrowserRouter>
  );
}

export default App;
