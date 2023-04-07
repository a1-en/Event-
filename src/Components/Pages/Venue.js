import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Ven = () => {
  let navigate = useNavigate();

  return (
    <>
      <div class="banner overlay">
        <img src="images/banquet/bg.png" class="img-fluid w-100"></img>
      </div>
      <div class=" bg-dark text-white overlay-content">
        <center>
          {" "}
          <h1>𝕎𝔼𝔻𝔻𝕀ℕ𝔾 𝕍𝔼ℕ𝕌𝔼𝕊`</h1>
          <p>
            {" "}
            Choose from among our glamorous ballroom venues – each offering a
            unique setting, from rustic to lavish –
          </p>
        </center>
      </div>
      <div class="container-fluid mt-3">
        <div class="row">
          <div class="col-sm-6 p-3 text-Black text-end">
            <button  onClick={() => navigate("/ABC")}> 
              {" "}
                {" "}
                <h1>Prince Marquee</h1>{" "}
              
            </button>
            <h5>Jauhar</h5>
            <p>Private lobby, 1 bridal suites, 2 bars, 24' x 38' dance floor</p>
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
            <button>
              {" "}
              <h1>Parsa Banquet</h1>
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
            <button>
              <h1>𝓔𝓵𝓮𝓰𝓪𝓷𝓽 𝓛𝓪𝔀𝓷</h1>
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
            <button>
              {" "}
              <h1>𝓢𝓪𝓯𝓯𝓻𝓸𝓷 𝓑𝓪𝓷𝓺𝓾𝓮𝓽</h1>
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
            <button>
              {" "}
              <h1>𝐓𝐡𝐞 𝐆𝐥𝐨𝐫𝐢𝐨𝐬𝐚 𝐁𝐚𝐧𝐪𝐮𝐞𝐭</h1>{" "}
            </button>
            <h5>Gulistan-e-Jauhar</h5>
            <p>Private lobby, 2 bridal suites, 2 bars, 24' x 38' dance floor</p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3  text-black text-end">
            <button>
              {" "}
              <h1>𝐇𝐚𝐬𝐬𝐚𝐧 𝐁𝐚𝐧𝐪𝐮𝐞𝐭</h1>{" "}
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