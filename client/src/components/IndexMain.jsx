import React from "react";
import { Link } from "react-router-dom";

export default function IndexMain() {
  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 text-white">
              Enjoy Our
              <br />
              Delicious Meal
            </h1>
            <p className="text-white mb-4 pb-2">
              Fresh, natural products every day, professional chefs and a
              service created for you! The restaurant is the destination of your
              dreams!
            </p>
            <Link
              to="/booking"
              className="btn btn-primary py-sm-3 px-sm-5 me-3"
            >
              Book A Table
            </Link>
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img className="img-fluid" src="img/hero.png" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
}
