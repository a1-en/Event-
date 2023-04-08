import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Venue from "./Pages/Venue";
import Cat from "./Pages/Cattering";
import Photo from "./Pages/Photographer";

const Content = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/venue";
    navigate(path);
  
  };

  return (
    <div id="#destinations">
      <Header />
      <section class="" id="destinations">   
        <div id="carouselExampleSlidesOnly" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="w"
                src="Images/banquet/123.jpg"
                alt="First slide"
                style={{ height: "auto" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="w"
                src="Images/banquet/232.png"
                alt="Second slide"
                style={{ height: "auto" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="w"
                src="Images/banquet/banner-1.jpg"
                alt="Third slide"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">Our services</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img
                  class="card-img-top"
                  src="Images/banquet/ig-3.jpg"
                  alt="no image"
                />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Venues</h4>
                  <p class="card-text text-secondary">
                    Here you can find best wedding halls{" "}
                  </p>
                </div>

                <div class="card-footer">
                  <Button
                    color="primary"
                    className="px-4"
                    onClick={() => navigate("/venue")}
                  >
                    click here for details
                  </Button>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/banquet/t-2.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Catering service</h4>
                  <p class="card-text text-secondary">
                    Best food services you can find here
                  </p>
                </div>
                
                <div class="card-footer">
                  <Button
                    color="primary"
                    className="px-4"
                    onClick={() => navigate("/Cattering")}
                  >
                    click here for details
                  </Button>
                </div>
              </div>
            </div>

            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/banquet/t-9.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Photographer </h4>
                  <p class="card-text text-secondary">
                    {" "}
                    You can select Photographer from here{" "}
                  </p>
                </div>
                <div class="card-footer">



                <Button
                    color="primary"
                    className="px-4"
                    onClick={() => navigate("/Photographer")}
                  >
                    click here for details
                  </Button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Content;
