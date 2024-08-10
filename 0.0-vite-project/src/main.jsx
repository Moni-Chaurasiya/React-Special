import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Moni from "./moni.jsx";

const anotherElement = (
  <a href="https:google.com" target="_blank">
    Visit google
  </a>
);
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_black" },
  "click me to visit google"
);
// React.createElement Arguments
// Type: The type of element you want to create (e.g., "p" for a paragraph).

// Props: An object with attributes and properties for the element. If there are no attributes, null is used.

// Children: Any content or child elements that should be nested within the created element. This can be a single value or multiple values separated by commas.
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <React.StrictMode>
      <App />
      <Moni />
      {reactElement}
      {/* In this curly breaket you can only write evaluted expression */}
      {anotherElement}
    </React.StrictMode>
  </div>
);
