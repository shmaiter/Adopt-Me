import React from "react";
// { render } only include the functions you use.
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatail" />
      <Pet name="Doik" animal="Cat" breed="Mix" />
    </div>
  );
};

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
