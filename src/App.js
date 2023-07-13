import React from "react";
import Router from "./routes/Router";
import GlobalState from "./global/GlobaState";

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;