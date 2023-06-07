import React from 'react';
import '../Components/Pages/Footer.css';
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>About Us</h3>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Quick Links</h3>
           
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Contact Info</h3>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>&copy; 2023 My Website. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
