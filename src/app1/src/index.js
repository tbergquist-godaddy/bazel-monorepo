import * as React from "react";
import { render } from "react-dom";

function App() {
  return <div>My pretty app to come</div>;
}

const rootDiv = document.querySelector("#root");

render(<App />, rootDiv);
