import React from "react";
import { AppRoutes } from "./Routers";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";
import {initializeApp} from "firebase/app";

//CSS imports
import "./index.css"
import './assets/fonts/fonts.css';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAFndLwoxDWDwELBfjp-K_EZgb_5rcec2U",
  authDomain: "makehair-3fc93.firebaseapp.com",
  projectId: "makehair-3fc93",
});

library.add(fab, fas);
function App() {
  return(
    <AppRoutes/>
  );
}

export default App
