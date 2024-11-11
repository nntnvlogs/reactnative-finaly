// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Screen01 from "./screen01";
import Screen02 from "./screen02";
import Screen03 from "./screen03";

const App = () => {
  return (
    <Provider store={store}>
      {/* <Screen01 /> */}
      <Screen02 />
      {/* <Screen03 /> */}
    </Provider>
  );
};

export default App;
