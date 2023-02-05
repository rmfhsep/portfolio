import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Spinner from "./shared/Spinner";
import Wrapper from "./pages/Wrapper";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Wrapper />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
