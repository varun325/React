//React is able to handle a lot of thing which normal Java Script can't based on the behind the scenes code in it's compiler.
import ReactDOM from "react-dom/client";

import "./index.css"; //this isn't something that would work in the standard JS
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); // Using an HTML code inside a function shouldn't work
// This is because React is transforming the code before running it.
