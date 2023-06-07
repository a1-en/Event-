import React from 'react';
import '../Components/Pages/css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../360/logo.png"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section className="navbar-dark bg-dark header">
      <div className="container">
        <div className="row">
          <div className="col-sm-12"> 
            <nav className="navbar navbar-expand-lg ">
              <img src={logo} alt="Logo" width="120" height="70" />
              <a className="navbar-brand text-white" href="#">Eventum</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" >
                      <Link to={"/"} >
                        Home
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#destinations">About Us<span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#destinations">Our Services<span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#destinations">Blogs<span className="sr-only"></span></a>
                  </li>
                </ul>
                {""}
                <div className ="imr">
                  <ul className="il">
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to={"/Login"}>
                          Login
                        </Link>
                      </a>
                    </li>
                  </ul>
                  <ul className="il">
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to={"/Vendor"}>
                          Register as Vendor
                        </Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section> 
  );
}

export default Header;
