import React from "react";
import Content from "./Components/Content";
import Venue from "./Components/Pages/Venue";
import Cattering from "./Components/Pages/Cattering";
import Photographer from "./Components/Pages/Photographer";
import ABC from './Components/Pages/ABC'
import Login from './Components/Pages/Login'
import Register  from "./Components/Pages/Register";
import Header from "./Components/Header";
import Header1 from "./Components/Header1";
import VNM from "./Components/Pages/VNM";
import DEF from "./Components/Pages/DEF";
import HS from "./Components/Pages/HS";
import VENDOR from "./Components/VENDOR";
import ABOUT from "./Components/Pages/ABOUT";
import 'bootstrap/dist/css/bootstrap.min.css';

//import "../src/Components/Pages/css/log.css";
//import "../src/Components/Pages/css/vnm.css";


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route  index  path="/" element={<Content />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/VENDOR" element={<VENDOR />} />
          <Route path="/ABOUT" element={<ABOUT />} />

          <Route  path="/venue" element={<Venue />} />
          <Route  path="/Cattering" element={<Cattering/>}/>
          <Route  path="/Photographer" element={<Photographer/>}/>
          <Route  path="/ABC" element={<ABC/>}/>
          <Route path="/VNM" element={<VNM/>}/>
          <Route path="/DEF" element={<DEF/>}/>
          <Route path="/HS" element={<HS/>}/>

          <Route path="/Header" element ={ <Header/>}/>
          <Route path="/Header1" element ={ <Header1/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
