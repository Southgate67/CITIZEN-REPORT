import React from "react";
import Form3 from "./Form3";

function Contact() {
  return (
    <>
      <div className="contact bg-success">
        <div className="container text-center pt-5">
          <h1
            className="mx-auto text-success mb-4"
            style={{ backgroundColor: "white", width: "370px" }}
          >
            CITIZEN RESPONSE
          </h1>
          <p className="pt-3" style={{ fontSize: "17px" }}>
            You too can make a big difference in promoting equitable development
            and governance across all the levels of governmnt and economic
            sectors of Nigeria. Let's join hands actively to build an
            egalitarian society that will be the "Mother Home" for all Black
            race across the world.
          </p>
          <p className="pt-3" style={{ fontSize: "14px" }}>
            Kindly call us for any complaint or suggestion. We are eager to
            heaar from you on how to serve you better and create a more loving
            space for our audience.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5" data-aos="fade-up">
            <p className="fw-bold">
              {" "}
              Kindly Call / Chat us or Send us an email.
            </p>
            <div className="">
              <div className="mb-3">
                <a
                  href="tel:09137029216"
                  className="text-decoration-none text-dark"
                >
                  <span className="me-3">
                    <i className="fa fa-phone"></i>
                  </span>
                  +234 9137029216
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="https://wa.me/+2349137029216"
                  className="text-decoration-none text-dark"
                >
                  <span className="me-3">
                    <i className="fab fa-whatsapp"></i>
                  </span>
                  +234 9137029216
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="mailto:info@crystalshipment.com"
                  className="text-decoration-none text-dark"
                >
                  <span className="me-3">
                    <i className="fa fa-envelope"></i>
                  </span>
                  info@crystalshipment.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-5" data-aos="fade-up">
            <Form3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
