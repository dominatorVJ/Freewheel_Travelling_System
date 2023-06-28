import React from "react";
import logoicon2 from "./images/logoicon2.png";
export const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "black" }}
      >
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section>
          <div className="container text-md-start mt-5">
            {/* Grid row */}
            <div className="row justify-content-around">
              {/* Grid column */}
              <div className="col-7">
                {/* Content */}
                <img src={logoicon2} style={{ height: "70px" }} alt="logo" />
                <p>
                  TravelSathi offers 'End to End' travel solutions including air
                  tickets for more than 400 international and domestic airlines,
                  hotel bookings for nearly 1 million hotels in India and
                  abroad, bus tickets with 2000+ bus operators, and railway
                  tickets in India for all major cities.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> India
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  support@travelsathi.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> 9999988888
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div className="text-center p-4" style={{ backgroundColor: "black" }}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="#">
            travelsathi.com
          </a>
          <p>This app is designed and maintained by Vishal Jaiswal</p>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
};
