import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

// Rendering React in v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// React.render(<App  />)

// For strict mode wrap in <App  /> in React.StrictMode. It renders components twice and check for bugs and see if we are using outdated componenets of React api.
