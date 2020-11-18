import React from "react";
import ReactDOM from "react-dom";
import App from "views/App";

import "@atlaskit/css-reset";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
