import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import { Pannellum } from "pannellum-react";
import myImage from "../../360/example.jpg";

const ABC = () => {
  let navigate = useNavigate();

  return (
    <>
       <div className="App">
       <Pannellum
        width="100%"
        height="500px"
        image={myImage}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={31}
          yaw={150}
          handleClick={(evt, name) => console.log(name)}
          name="hs1"
        />
      </Pannellum>
       </div>
    </>
  );
};

export default ABC;