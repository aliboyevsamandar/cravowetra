import React from "react";

export default function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100"
                  src="img/about-1.jpg"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75"
                  src="img/about-2.jpg"
                  style={{ marginTop: "25%" }}
                />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-75" src="img/about-3.jpg" />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100"
                  src="img/about-4.jpg"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
              About Us
            </h5>
            <h1 className="mb-4">
              Welcome to <i className="fa fa-utensils text-primary me-2"></i>
              Restoran
            </h1>
            <p className="mb-4">
              Fresh, natural products every day, professional chefs and a
              service created for you! The restaurant is the destination of your
              dreams!
            </p>
            <p className="mb-4">
              We don't just make food - we create delicious experiences. Welcome
              to our restaurant, where food comes from the heart.
            </p>
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-primary mb-0">
                    15
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-primary mb-0">
                    50
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0">Master Chefs</h6>
                  </div>
                </div>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
