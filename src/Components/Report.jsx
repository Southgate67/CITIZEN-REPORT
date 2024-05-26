import React from "react";
import Human3 from "../assets/Images/Human3.jpg";
import Form from "./Form";

function Report() {
  return (
    <>
      <div className="hero1">
        <div className="container text-center pt-4">
          <h1 className="" style={{ marginTop: "140px" }}>
            Enter Your Report Here
          </h1>
          <p className="pt-3" style={{ fontSize: "24px" }}>
            Your sincere report can make a big difference for your community and
            contribute to the development of our dear nation
          </p>
        </div>
      </div>

      <div className="container" data-aos="fade-up">
        <p className="px-5 pt-5">
          Many communities in Nigeria are overwhelmed with many challenges which
          often stay unreported to the relevant government agencies, making it
          difficult for government to respond appropriately, thus leading to
          significant economic and human losses and hindering economic growth
          and stability.
        </p>

        <p className="px-5 pt-1">
          <span className="text-success" style={{ fontWeight: 900 }}>
            CITIZEN RESPONSE
          </span>
          is a platform that will enable citizens to report the challenges,
          emergencies, and threats in their communities . We aim to empower
          residents in every community with the right tool that will amplify
          their voices and ensure their active contribution in enhancing
          transparency, accountability, and good governance at all levels of
          government.
        </p>

        <p className="px-5 pt-1">
          <span className="text-success" style={{ fontWeight: 900 }}>
            CITIZEN RESPONSE
          </span>
          is committed to promoting sustainable development across the country.
          Let's join hands and build a safer and more prosperous, and enviable
          nation.
        </p>
      </div>

      <div className="container">
        <div className="row pt-4">
          <div className="col-md-4 mt-3" data-aos="fade-right">
            <img
              src={Human3}
              className="img-fluid rounded"
              style={{ width: "300px" }}
              alt=""
            />
            <p className="pt-3">
              Be empowered today to make a great difference for your community.
            </p>
          </div>

          <div className="col-md-8 text-center mt-2" data-aos="fade-left">
            <h4 className="text-danger pb-1">REPORT FORM</h4>
            <h5 className="pb-3">
              Welcome! Kindly fill the form below to submit your report.
            </h5>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
