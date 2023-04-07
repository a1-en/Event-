import React from "react";
import Content from "./Components/Content";
import Venue from "./Components/Pages/Venue";
import Cattering from "./Components/Pages/Cattering";
import Photographer from "./Components/Pages/Photographer";
import ABC from './Components/Pages/ABC'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Content />} />
          <Route  path="/venue" element={<Venue />} />
          <Route  path="/Cattering" element={<Cattering/>}/>
          <Route  path="/Photographer" element={<Photographer/>}/>
          <Route  path="/ABC" element={<ABC/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
