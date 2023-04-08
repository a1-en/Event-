import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from 'react-router-dom';

function Header1() {
  return (
    <section class="navbar-dark bg-dark header">
       <div class="container">
          <div class="row">
           <div class="col-sm-12"> 
            <nav class="navbar navbar-expand-lg ">
              <a class="navbar-brand text-white" href="#">Eventum</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

            


              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                





                <li class="nav-item">
                    <a class="nav-link" >
                    <Link to={"/"} >
                    Home
                    </Link>
</a>
                  </li>
                



                  
              
                </ul>
                <ul class="il">
                <li class="nav-item">
                    <a class="nav-link" >
                    <Link to={"/Login"} >
                    Login
                    </Link>
</a>
                  </li>
                 
                </ul>
                
              </div>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}

export default Header1;
