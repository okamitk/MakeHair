import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
//Page imports
import Home from "./pages/pt/Home";
import Login from "./pages/pt/Login";
import Regist from "./pages/pt/Regist";
//Routers
export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/pt/inicio" element={<Home/>}></Route>
                <Route path="/pt/entrar" element={<Login/>}></Route>
                <Route path="/pt/registrar" element={<Regist/>}></Route>
            </Routes>
        </Router>
    )
  }