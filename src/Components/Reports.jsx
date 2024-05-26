import React from "react";
import Form1 from "./Form1";
import Human1 from "../assets/Images/Human1.jpg";

function Reports() {
  return (
    <>
      <div className="hero">
        <div className="container text-center pt-5">
          <h1
            className="text-light"
            style={{ marginTop: "100px" }}
            data-aos="fade-right"
          >
            Search For Reports Here
          </h1>
          <p
            className="text-danger pt-3"
            style={{ fontSize: "34px" }}
            data-aos="fade-left"
          >
            We have made it simple and easy
          </p>
        </div>
      </div>

      <div className="container">
        <p className="text-dark p-5 text-center" style={{ fontSize: "20px" }}>
          Search through our database to get the reports from citizens across
          all the communities in the 774 LGAs in Nigeria.
        </p>
      </div>

      <div className="container">
        <div className="row pt-4">
          <div className="col-md-4 mt-3" data-aos="fade-right">
            <img
              src={Human1}
              className="img-fluid rounded"
              style={{ width: "300px" }}
              alt=""
            />
            <p className="pt-3">
              Be empowered today to make a great difference for your community.
            </p>
          </div>

          <div className="col-md-8 text-center mt-2" data-aos="fade-left">
            <h4 className="pb-1" style={{ fontWeight: 750 }}>
              SEARCH
            </h4>
            <h5 className="pb-3">
              To search for reports, enter search details here
            </h5>
            <Form1 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
