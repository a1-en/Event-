import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cat = () => {
  return (
    <>
      <div class="banner overlay">
        <img src="images/Food/bg.png" class="img-fluid w-100"></img>
      </div>
      <div class=" bg-dark text-white overlay-content">
        <center>
          {" "}
          <h1>Catering Service</h1>
          <p>
            {" "}
            Choose one of best catering services below  – Here –
          </p>
        </center>
      </div>
      <div class="container-fluid mt-3">
        <div class="row">
          <div class="col-sm-6 p-3 text-Black text-end">
            <button>
              {" "}
              <a href="http://localhost:3005/">
                {" "}
                <h1>Venue and Menu</h1>{" "}
              </a>{" "}
            </button>
            <h5>Hussainabad</h5>
          </div>

          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/Food/galaxy.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3 text-white text-start">
            <img
              src="images/Food/lines.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>

          <div class="col-sm-6 p-3 text-black">
            <button>
              {" "}
              <h1>Taj Mahal cattering  </h1>
            </button>
            <h5>Nazimabad</h5>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3  text-black text-end">
            <button>
              {" "}
              <h1>Siddiqui Caterers</h1>
            </button>
            <h5>Jauhar </h5>
          </div>

          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/Food/and.png"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/Food/elegant.png"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>

          <div class="col-sm-6 p-3  text-black text-start">
            <button>
              <h1>Noor cattering</h1>
            </button>
            <h5>North Nazimabad</h5>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3  text-black text-end">
            <button>
              {" "}
              <h1>Al haaj Akhtar</h1>
            </button>
            <h5>North Karachi</h5>
          </div>

          <div class="col-sm-6 p-3 text-black">
            <img
              src="images/Food/casamneto.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3 text-white">
            <img
              src="images/Food/saffron.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>

          <div class="col-sm-6 p-3  text-black text-start">
            <button>
              {" "}
              <h1>Imperial Cattering</h1>
            </button>
            <h5>Five star</h5>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 p-3  text-black text-end">
            <button>
              {" "}
              <h1>Qureshis</h1>
            </button>
            <h5>FB Area</h5>
          </div>

          <div class="col-sm-6 p-3 text-black">
            <img
              src="images/Food/venet.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
        </div>

        <div class="row"></div>

        <div class="row">
          <div class="col-sm-6 p-3 text-black">
            <img
              src="images/Food/glorio.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>

          <div class="col-sm-6 p-3  text-black text-start">
            <button>
              {" "}
              <h1>Citi caterer</h1>{" "}
            </button>
            <h5>Gulistan-e-Jauhar</h5>
          </div>
        </div>

    

        <div class="row">
          <div class="col-sm-6 p-3 text-black">
            <img
              src="images/Food/Hassan.jpg"
              class="rounded mx-auto d-block"
              style={{ height: "450px", width: "600px" }}
            ></img>
          </div>
          <div class="col-sm-6 p-3  text-black text-start">
            <button>
              {" "}
              <h1>Vayani </h1>{" "}
            </button>
            <h5>Sehba Akhtar</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cat;