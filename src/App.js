import React from "react";
import Content from "./Components/Content";
import Venue from "./Components/Pages/Venue";
import Cat from "./Components/Pages/Cattering";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Content />} />
          <Route exact path="/venue" element={<Venue />} />
          <Route exact path="/Cat" element={<Cat/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
