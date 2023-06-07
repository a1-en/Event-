
import React from 'react';
import Header1 from '../Header1';
import { useNavigate } from "react-router-dom";

import '../../Components/Pages/css/vnm.css';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"> </link>
function VNM() {
  
  let navigate = useNavigate();


  return (
    <> 
    <Header1/>
    
    <div>
<section class="section1">
    	<div class="container">
        
        	<div class="box">	        		
            	<div class="box1">
              <div class="col-sm-6 p-3 text-black ">
          <img src="Images/pp/meh1.png" class="rounded mx-auto d-block" style={{ height: "420px", width: "450px" }}></img>
        </div>
           	  </div>
            
            	<div class="box2">
                	<div class="details">
                
                    	<h1>V&M</h1>
                      <h5>Address</h5>
                        <p>Main Hussainabad Food street</p>
                        <h6>Phone: 021-3664-6160</h6>
                        
                        <h5>Open-Close hours:</h5>
<p>
<p>Friday	10am–11pm</p>           
<p>Saturday	10am–11pm </p>
<p>Sunday	10am–11pm</p>
<p>Monday	10am–11pm </p>
<p>Tuesday	10am–11pm</p>
<p>Wednesday	10am–11pm,</p>
<p>Thursday	10am–11pm</p>  
</p>            
<button class="venue-menu-button" onClick={() => navigate("/CFORM")}>      Book Now</button>
                    </div>
            	</div>
            </div>            
  </div>
</section>

    </div></>
  );
}


export default VNM;
