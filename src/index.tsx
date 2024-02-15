import React from "react";
import { createRoot } from "react-dom/client";

/**
 * styles
 */
import 'styles/reset.css'
import 'styles/index.css';


import App from "./App";

createRoot(document.getElementById("root")).render(<App />);

