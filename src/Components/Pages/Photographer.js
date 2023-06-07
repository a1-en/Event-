import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Header1 from "../../Components/Header1";




const Photo = () => {
  let navigate = useNavigate();

  return (
    <>     <Header1 />

      <div class="banner overlay">
        <img src="images/Graphers/bg3.jpg" class="img-fluid w-100"></img>
      </div>
      <div class=" bg-dark text-white overlay-content">
        <center>
          {" "}
          <h1>𝐏𝐇𝐎𝐓𝐎𝐆𝐑𝐀𝐏𝐇𝐄𝐑𝐒 & 𝐕𝐈𝐃𝐄𝐎𝐆𝐑𝐀𝐏𝐇𝐄𝐑𝐒</h1>
          <p>
            {" "}
            Choose from among our Bestest Photographers and videographers ballroom venues –
          </p>
        </center>
      </div>
      <div class="container-fluid mt-3">
        <div class="row">
          <div class="col-sm-6 p-3 text-Black text-end">
          <button  onClick={() => navigate("/HS")}>        {" "}
                
                <h1>𝓗𝓪𝓴𝓲𝓶 𝓢𝓸𝓷𝓼</h1>{" "}
              {" "}
            </button>
            <h5>𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜 | 𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞</h5>
          </div>

          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/Graphers/hakim.png"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3 text-white text-start">
            <img
              src="images/Graphers/studio13.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>

          <div class="col-sm-6 p-3 text-black">
          <button  onClick={() => navigate("/ST13")}>        {" "}
                
                <h1>Studio 13 Photographer</h1>{" "}
              {" "}
            </button>
            <h5>𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜 | 𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞</h5>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3  text-black text-end">
          <button  onClick={() => navigate("/SF")}>        {" "}
                
                <h1>The Shadi Filmers</h1>{" "}
              {" "}
            </button>
            <h5>𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜 | 𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞 </h5>
          </div>

          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/Graphers/tsf.png"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/Graphers/pdpp.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>

          <div class="col-sm-6 p-3  text-black text-start">
          <button  onClick={() => navigate("/PDP")}>        {" "}
                
                <h1>𝓟𝓪𝓼𝓼𝓲𝓸𝓷𝓷𝓮 𝓓𝓮 𝓟𝓻𝓸𝓭𝓾𝓬𝓽𝓲𝓸𝓷: 𝓟𝓓𝓟 𝓗𝓸𝓾𝓼</h1>{" "}
              {" "}
            </button>
            <h5>𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜 | 𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞</h5>
          </div>
        </div>

      

      








        <div class="row">
          <div class="col-sm-6 p-3  text-black text-end">
          <button  onClick={() => navigate("/AJS")}>        {" "}
                
                <h1>AJ Studio</h1>{" "}
              {" "}
            </button>
            <h5>𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜 | 𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞 </h5>
          </div>

          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/Graphers/aj.png"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
        </div>

      </div>
    </>
  );
};

export default Photo;