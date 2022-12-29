import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Spinner from "./shared/Spinner";
import Wrapper from "./pages/Wrapper";

function App() {
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
