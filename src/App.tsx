import React from "react";
import { AppRoutes } from "./Routers";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";

//CSS imports
import "./index.css"
import './assets/fonts/fonts.css';

library.add(fab, fas);
function App() {
  return(
    <AppRoutes/>
  );
}

export default App
