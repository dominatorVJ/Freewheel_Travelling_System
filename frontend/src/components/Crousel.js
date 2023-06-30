import React from "react";
import homebg from "./images/homebg.jpg";
import flight from "./images/flight.jpg";
import hotel from "./images/hotel.jpg";
export const Crousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ height: "450px" }}>
          <img
            src={homebg}
            className="d-block w-100"
            style={{ height: "100%", objectFit: "cover" }}
            alt="first"
          />
          <div className="carousel-caption mb-4 d-none d-md-block">
            <h1 className="mb-5 display-1">Adventure is out there</h1>
            <p className="mb-3 fs-5">
              Get best deals on your customized trip packages
            </p>
            <button type="button" className="btn btn-primary px-4 py-2 fs-6">
              Check now
            </button>
          </div>
        </div>
        <div className="carousel-item" style={{ height: "450px" }}>
          <img
            src={flight}
            className="d-block w-100"
            style={{ height: "100%", objectFit: "cover" }}
            alt="second"
          />
          <div className="carousel-caption mb-5 d-none d-md-block">
            <p className="mb-3 fs-5">
              Upto 70% discount on domestic as well as international flights
            </p>
            <button type="button" className="btn btn-primary px-4 py-2 fs-6">
              Check now
            </button>
          </div>
        </div>
        <div className="carousel-item" style={{ height: "450px" }}>
          <img
            src={hotel}
            className="d-block w-100"
            style={{ height: "100%", objectFit: "cover" }}
            alt="third"
          />
          <div className="carousel-caption mb-5 d-none d-md-block">
            <p className="mb-3 fs-5">Book Hotelsrooms at the lowest price</p>
            <button type="button" className="btn btn-primary px-4 py-2 fs-6">
              Book now
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
