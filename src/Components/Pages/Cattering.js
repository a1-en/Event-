import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header1";
import Header1 from "../../Components/Header1";



const Cat = () => {

  let navigate = useNavigate();

  return (


    <>

<Header1 />

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
  <div class="col-sm-6 p-3 text-black text-end">
    <button onClick={() => navigate("/VNM")}>        
      <h1>Venue and Menu</h1>
    </button>
    {} {} {}
    <h5>Hussainabad</h5>
  </div>

  <div class="col-sm-6 p-3">
    <img
      src="images/Food/galaxy.png"
      class="rounded mx-auto d-block food-image"
      alt="Food Image"
    >
    </img>
  </div>
</div>



<div class="row">
  <div class="col-sm-6 p-3 text-start">
    <img src="images/Food/lines.png" class="rounded mx-auto d-block food-image" alt="Food Image">
 </img>
  </div>

  <div class="col-sm-6 p-3">
    <button class="venue-menu-button"  onClick={() => navigate("/TM")}>        
      <h1>Taj Mahal Catering</h1>
    </button>
    <h5 class="venue-name">Nazimabad</h5>
  </div>
</div>

<div class="row">
  <div class="col-sm-6 p-3 text-end">
    <button class="venue-menu-button"  onClick={() => navigate("/SC")}>    
      <h1>Siddiqui Catering</h1>
    </button>
    <h5 class="venue-name">Jauhar</h5>
  </div>

  <div class="col-sm-6 p-3">
    <img src="images/Food/and.png" class="rounded mx-auto d-block food-image" alt="Food Image">
 </img>
  </div>
</div>


<div class="row">
  <div class="col-sm-6 p-3">
    <img src="images/Food/elegant.png" class="rounded mx-auto d-block food-image" alt="Food Image">
  
  </img>
  </div>

  <div class="col-sm-6 p-3 text-start">
    <button class="venue-menu-button" onClick={() => navigate("/NC")}>                
      <h1>Noor</h1>
    </button>
    <h5 class="venue-name">North Nazimabad</h5>
  </div>
</div>


<div class="row">
  <div class="col-sm-6 p-3 text-end">
    <button class="venue-menu-button" onClick={() => navigate("/AH")}>        
      <h1>AL Haaj Akhtar</h1>
    </button>
    <h5 class="venue-name">North Karachi</h5>
  </div>

  <div class="col-sm-6 p-3">
    <img src="images/Food/casamneto.jpg" class="rounded mx-auto d-block food-image" alt="Food Image">
 </img>
  </div>
</div>

<div class="row">
  <div class="col-sm-6 p-3">
    <img src="images/Food/saffron.jpg" class="rounded mx-auto d-block food-image" alt="Food Image">
  
  </img>
  </div>

  <div class="col-sm-6 p-3 text-start">
    <button class="venue-menu-button" onClick={() => navigate("/NC")}>                
      <h1>Imperial</h1>
    </button>
    <h5 class="venue-name">North Nazimabad</h5>
  </div>
</div>

<div class="row">
  <div class="col-sm-6 p-3 text-end">
    <button class="venue-menu-button" onClick={() => navigate("/QC")}>
      <h1>Qureshi Catering</h1>
    </button>
    <h5 class="venue-name">FB Area</h5>
  </div>

  <div class="col-sm-6 p-3">
    <img src="images/Food/venet.jpg" class="rounded mx-auto d-block food-image" alt="Food Image">
 
 </img>
  </div>
</div>

        <div class="row"></div>

        <div class="row">
  <div class="col-sm-6 p-3">
    <img src="images/Food/glorio.jpg" class="rounded mx-auto d-block food-image" alt="Food Image">
  
  </img>
  </div>

  <div class="col-sm-6 p-3 text-start">
    <button class="venue-menu-button"onClick={() => navigate("/CC")}>
      <h1>Citi Catering</h1>
    </button>
    <h5 class="venue-name">Gulistan-e-Jauhar</h5>
  </div>
</div>



<div class="row">
  <div class="col-sm-6 p-3 text-end">
    <button class="venue-menu-button" onClick={() => navigate("/QC")}>
      <h1>Vayani </h1>
    </button>
    <h5 class="venue-name">FB Area</h5>
  </div>

  <div class="col-sm-6 p-3">
    <img src="images/Food/Hassan.jpg" class="rounded mx-auto d-block food-image" alt="Food Image">
 
 </img>
  </div>
</div>

      </div>
    </>
  );
};

export default Cat;