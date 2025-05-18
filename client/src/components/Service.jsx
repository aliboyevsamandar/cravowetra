import React from "react";

export default function Service() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                <h5>Master Chefs</h5>
                <p>
                  Our master chefs are experts in their field, with years of
                  international experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                <h5>Quality Food</h5>
                <p>
                  We strive for the highest quality in every dish. We use only
                  the purest, natural and local products.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                <h5>Online Order</h5>
                <p>
                  Now order your favorite dishes without leaving home! Our
                  online ordering system is fast.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                <h5>24/7 Service</h5>
                <p>
                  We are always ready for you. 24 hours a day, 7 days a week —
                  we are at your service at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
