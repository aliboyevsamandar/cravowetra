import React from "react";
import { Link } from "react-router-dom";
import { GrYoutube } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Company
            </h4>
            <Link className="btn btn-link">Home</Link>
            <Link className="btn btn-link">About</Link>
            <Link className="btn btn-link">Service</Link>
            <Link className="btn btn-link">Menu</Link>
            <Link className="btn btn-link">Contact</Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Contact
            </h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>17A Street Uzbekistan
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+998 94 324 07 06
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>
              samandaraliboyev15@example.com
            </p>
            <div className="d-flex pt-2">
              <Link className="btn btn-outline-light btn-social">
                <BsTwitterX />
              </Link>
              <Link className="btn btn-outline-light btn-social">
                <FaFacebook />
              </Link>
              <Link className="btn btn-outline-light btn-social">
                <GrYoutube />
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Opening
            </h4>
            <h5 className="text-light fw-normal">Monday - Saturday</h5>
            <p>09AM - 09PM</p>
            <h5 className="text-light fw-normal">Sunday</h5>
            <p>10AM - 08PM</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Newsletter
            </h4>
            <p>
              Special discounts and useful advice are waiting for you — send
              them to your email!
            </p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control border-primary w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
