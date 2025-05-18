import React, { useEffect, useState } from "react";

export default function Menu() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`https://cravowetra.onrender.com/api/foods`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Kelgan data:", data);
        setFoods(data);
      })
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  const renderItems = (category) => {
    return foods
      .filter((food) => food.category === category)
      .map((food) => (
        <div className="col-lg-6" key={food._id}>
          <div className="d-flex align-items-center">
            <img
              className="flex-shrink-0 img-fluid rounded"
              src={food.image}
              alt={food.name}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover", // rasmni kesib bo‘lsa ham to‘ldiradi
              }}
            />

            <div className="w-100 d-flex flex-column text-start ps-4">
              <h5 className="d-flex justify-content-between border-bottom pb-2">
                <span>{food.name}</span>
                <span className="text-primary">${food.price}</span>
              </h5>
              <small className="fst-italic">{food.description}</small>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Food Menu
          </h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>

        <div className="tab-class text-center wow fadeInUp">
          <ul
            className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="breakfast-tab"
                data-bs-toggle="pill"
                data-bs-target="#tab-1"
                type="button"
                role="tab"
                aria-controls="tab-1"
                aria-selected="true"
              >
                <i className="fa fa-coffee fa-2x text-primary me-2"></i>
                Breakfast
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="lunch-tab"
                data-bs-toggle="pill"
                data-bs-target="#tab-2"
                type="button"
                role="tab"
                aria-controls="tab-2"
                aria-selected="false"
              >
                <i className="fa fa-hamburger fa-2x text-primary me-2"></i>
                Lunch
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="dinner-tab"
                data-bs-toggle="pill"
                data-bs-target="#tab-3"
                type="button"
                role="tab"
                aria-controls="tab-3"
                aria-selected="false"
              >
                <i className="fa fa-utensils fa-2x text-primary me-2"></i>
                Dinner
              </button>
            </li>
          </ul>

          <div className="tab-content">
            <div
              className="tab-pane fade show active p-0"
              id="tab-1"
              role="tabpanel"
              aria-labelledby="breakfast-tab"
            >
              <div className="row g-4">{renderItems("breakfast")}</div>
            </div>
            <div
              className="tab-pane fade p-0"
              id="tab-2"
              role="tabpanel"
              aria-labelledby="lunch-tab"
            >
              <div className="row g-4">{renderItems("lunch")}</div>
            </div>
            <div
              className="tab-pane fade p-0"
              id="tab-3"
              role="tabpanel"
              aria-labelledby="dinner-tab"
            >
              <div className="row g-4">{renderItems("dinner")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
