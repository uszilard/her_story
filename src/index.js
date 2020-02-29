import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import 'typeface-montserrat'


import "./global.css";

import App from "./App";

const sidePadding = "0.25rem";

const theme = {
  sidePadding
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
