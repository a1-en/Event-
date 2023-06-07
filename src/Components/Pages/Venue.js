import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Header1 from "../../Components/Header1";

const Ven = () => {
  let navigate = useNavigate();

  return (
    <>
          <Header1 />

       <div className="banner overlay">
        <img src="images/banquet/bg.png" alt="Banquet background" className="img-fluid w-100" />
      </div>

      <div className="bg-dark text-white overlay-content">
        <h1 className="text-center">Wedding Venues</h1>
        <p className="text-center">
          Choose from among our glamorous ballroom venues – each offering a unique setting, from rustic to lavish –
        </p>
      </div>

      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-sm-6 p-3 text-black text-end">
            <button className="venue-button" onClick={() => navigate("/ABC")}>
              <h2>Prince Marquee</h2>
            </button>
            <h5 className="venue-location">Jauhar</h5>
            <p className="venue-description">Private lobby, 1 bridal suite, 2 bars, 24' x 38' dance floor</p>
          </div>

          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/banquet/galaxy.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3 text-white text-start">
            <img
              src="images/banquet/lines.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>

          <div class="col-sm-6 p-3 text-black">
            <button>
              {" "}
              <h1>𝓛𝓲𝓷𝓮𝓼 𝓗𝓸𝓾𝓼𝓮 </h1>
            </button>
            <h5>Gulshan-e-Iqbal</h5>
            <p>Private lobby, 24' x 38' dance floor</p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3  text-black text-end">
          <button  onClick={() => navigate("/DEF")}> 
              {" "}
           
                <h1>Parsa Banquet</h1>{" "}
              
            </button>
            <h5>Jauhar </h5>
            <p>Private lobby, 1 bridal suit</p>
          </div>

          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/banquet/ig-3.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/banquet/elegant.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>

          <div class="col-sm-6 p-3  text-black text-start">
          <button className="venue-button" onClick={() => navigate("/ELEGANT")}>
              <h2>ELEGANT</h2>
            </button>
            <h5>North Nazimabad</h5>
            <p>Private lobby, 2 bridal suites, 2 bars, 24' x 38' dance floor</p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3  text-black text-end">
            <button>
              {" "}
              <h1>𝓒𝓪𝓼𝓪𝓶𝓮𝓷𝓽𝓸 𝓑𝓪𝓷𝓺𝓾𝓮𝓽</h1>
            </button>
            <h5>North Nazimabad</h5>
            <p>Private lobby, 1 bridal suite</p>
          </div>

          <div class="col-sm-6 p-3 text-black">
            <img
              src="images/banquet/casamneto.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/banquet/saffron.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>

          <div class="col-sm-6 p-3  text-black text-start">
          <button className="venue-button" onClick={() => navigate("/SAFFRON")}>
              <h2>SAFFRON BANQUET</h2>
            </button>
            <h5>North Nazimabad</h5>
            <p>Private lobby, 2 bridal suites, 2 bars, 24' x 38' dance floor</p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3  text-black text-end">
            <button>
              {" "}
              <h1>𝙑𝙚𝙣𝙚𝙩𝙞𝙖𝙣 𝘽𝙖𝙣𝙦𝙪𝙚𝙩</h1>
            </button>
            <h5>FB Area</h5>
            <p>Private lobby, 2 bridal suites, 2 bars, 24' x 38' dance floor</p>
          </div>

          <div class="col-sm-6 p-3 text-black">
            <img
              src="images/banquet/venet.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
        </div>

        <div class="row"></div>

        <div class="row">
          <div class="col-sm-6 p-3 text-black">
            <img
              src="images/banquet/glorio.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>

          <div class="col-sm-6 p-3  text-black text-start">
          <button className="venue-button" onClick={() => navigate("/GLORIOSA")}>
              <h2>GLORIOSA BANQUET</h2>
            </button>
            <h5>Gulistan-e-Jauhar</h5>
            <p>Private lobby, 2 bridal suites, 2 bars, 24' x 38' dance floor</p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3  text-black text-end">
          <button className="venue-button" onClick={() => navigate("/HASAN")}>
              <h2>HASAN BANQUET</h2>
            </button>
            <h5>Gulistan-e-Jauhar</h5>
            <p>Private lobby, 2 bridal suites, 24' x 38' dance floor</p>
          </div>

          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/banquet/hassan.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3 text-black">
            <img
              src="images/banquet/candles.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
          <div class="col-sm-6 p-3  text-black text-start">
            <button>
              {" "}
              <h1>𝐂𝐚𝐧𝐝𝐥𝐞𝐬 𝐁𝐚𝐧𝐪𝐮𝐞𝐭 </h1>{" "}
            </button>
            <h5>Gulistan-e-Jauhar</h5>
            <p>Private lobby, 1 bridal suite, 24' x 38' dance floor</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ven;