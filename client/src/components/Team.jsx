import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrYoutube } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Team() {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:1111/api/chefs`) // 🔗 serverdan ma'lumot olish
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  return (
    <div className="container-xxl pt-5 pb-3">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Team Members
          </h5>
          <h1 className="mb-5">Our Master Chefs</h1>
        </div>
        <div className="row g-4">
          {chefs.map((chef, index) => (
<div key={index} className="col-lg-3 col-md-6 wow fadeInUp">
  <div
    className="team-item text-center rounded overflow-hidden"
    style={{ height: '100%', minHeight: '380px' }} // optional height
  >
    <div
      className="rounded-circle overflow-hidden m-4"
      style={{
        width: '200px',
        height: '200px',
        margin: '0 auto',
      }}
    >
      <img
        className="img-fluid"
        src={chef.image}
        alt={chef.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // yoki 'contain'
        }}
      />
    </div>
    <h5 className="mb-0">{chef.name}</h5>
    <small>{chef.age}</small>
    <div className="d-flex justify-content-center mt-3">
      <Link
        className="btn btn-square btn-primary mx-1"
        to="https://www.youtube.com/"
      >
        <GrYoutube />
      </Link>
      <Link
        className="btn btn-square btn-primary mx-1"
        to="https://x.com/"
      >
        <BsTwitterX />
      </Link>
      <Link
        className="btn btn-square btn-primary mx-1"
        to="https://facebook.com"
      >
        <FaFacebook />
      </Link>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </div>
  );
}
