import React from 'react';
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header1 from "./Header1";

  function VENDOR() {
   let navigate = useNavigate();

    return (
       <div>
                <Header1/>

         <section class="">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/Vendor/banner-1.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="Images/Vendor/123.png" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="Images/Vendor/banner-1.jpg" alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   

    
        <section class="" id="destinations">   
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/Vendor/ig-3.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Wedding Halls</h4>
                          <p class="card-text text-secondary">Grow up your business </p>
                       </div>
                       <Button
                    color="primary"
                    className="px-4"
                    onClick={() => navigate("/ADD3")}
                  >
                    ADD my Business
                  </Button>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/Vendor/t-2.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">cattering service</h4>
                          <p class="card-text text-secondary">Grow up your business!</p>
                       </div>
                       <Button
                    color="primary"
                    className="px-4"
                    onClick={() => navigate("/ADD3")}
                  >
                    ADD my Business
                  </Button>
                    </div>
                 </div>
                 







                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/Vendor/t-9.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">photographers</h4>
                          <p class="card-text text-secondary">Grow up your business!</p>
                       </div>
                       <Button
                    color="primary"
                    className="px-4"
                    onClick={() => navigate("/ADD3")}
                  >
                    ADD my Business
                  </Button>
                    </div>
                 </div>
                 






                 
                

<div id = "ab">
   <h2> About us</h2>
   <p class = "red"> Our primary goal is to provide a platform where users may access a variety of services provided by an event planner, with just one click. Our main objective is to help event planners in capturing audience and getting clients also other objective is to make it easier for the clients to hire a planner, get in touch with them and get their events done. Because individuals can visit this website frequently for their satisfaction and get info related to it we want to create a welcoming environment for event planners where they can publish themselves and update their clients about their services so the clients will feel confident and trust them more. Our platform will showcase the planner’s services like venues, caterers, photographers, and other more. By having a web presence users can easily find their information and get in touch with them. Planners will have the chance to have their complete information on our platform, which they can change as needed, based on their company strategy, will be provided to the business owner. The user has the option to choose any service on our website that best suits their needs. When it comes to payment, all negotiations and deal-making must take place between the user and the vendor; this will be done on the basis of mutual understanding through the meeting they will schedule on their own through the website. Here, in Pakistan this website isn’t that common because people use to visit multiple times here and there for their satisfaction. So, our goal is to provide friendly environment to customers so they can trust and avail many services of planner from our website. </p>
</div>
            
              </div>
        </div>
       </section>  


      
    
   
   </div>
    );
  }
  
  export default VENDOR;