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
import ADD3 from "./Components/Pages/ADD3";
import GLORIOSA from "./Components/Pages/GLORIOSA";
import HASAN from "./Components/Pages/HASAN";
import SAFFRON from "./Components/Pages/SAFFRON";
import ELEGANT from "./Components/Pages/ELEGANT";
import TM from "./Components/Pages/TM";
import SC from "./Components/Pages/SC";
import NC from "./Components/Pages/NC";
import AH from "./Components/Pages/AH";
import IMC from "./Components/Pages/IMC";
import QC from "./Components/Pages/QC";
import CC from "./Components/Pages/CC";
import VC from "./Components/Pages/VC";
import AJS from "./Components/Pages/AJS";
import PDP from "./Components/Pages/PDP";
import ST13 from "./Components/Pages/ST13";
import SF from "./Components/Pages/SF";
import CFORM from "./Components/Pages/CFORM";
import VFORM from "./Components/Pages/VFORM";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
          <Route path="/SC" element={<SC />} />
          <Route path="/NC" element={<NC />} />
          <Route path="/AH" element={<AH />} />
          <Route path="/IMC" element={<IMC />} />
          <Route path="/QC" element={<QC />} />
          <Route path="/CC" element={<CC />} />
          <Route path="/VC" element={<VC />} />
          <Route path="/AJS" element={<AJS />} />
          <Route path="/SF" element={<SF />} />
          <Route path="/ST13" element={<ST13 />} />
          <Route path="/CFORM" element={<CFORM />} />
          <Route path="/VFORM" element={<VFORM />} />


          <Route path="/TM" element={<TM />} />
          <Route path="/ADD3" element={<ADD3/>} />
          <Route path="/HASAN" element={<HASAN/>} />
          <Route path="/GLORIOSA" element={<GLORIOSA/>} />
          <Route path="/SAFFRON" element={<SAFFRON/>} />
          <Route path="/ELEGANT" element={<ELEGANT/>} />
          <Route path="/PDP" element={<PDP/>} />

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
