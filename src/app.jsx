import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skiils from "./pages/Skills";
import { useState } from "react";
import Spinner from "./shared/Spinner";
import Wrapper from "./pages/Wrapper";

const Wrap = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  font-family: "SBAggroM";
`;

function App() {
  const [value, setValue] = useState("");
  const valueHandler = (value) => {
    setValue(value.target.value);
  };
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Wrapper></Wrapper>
        {/* <Wrap>
          {" "}
          <Header
            valueHandler={valueHandler}
            setValue={setValue}
            value={value}
          />
          <Home />
          <About />
          <Skiils />
          <Footer />
        </Wrap> */}
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
