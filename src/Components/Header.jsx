import React from "react";
import Citizen from "../assets/Images/Citizen.jpg";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* <a className="navbar-brand" href="#">
            <p className="text-success mb-0">CITIZEN RESPONSE</p>
          </a> */}
          <a className="navbar-brand" href="#"><img src={Citizen} alt="/" className='img-fluid' style={{width:40}} /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar navbar-expand-lg" id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-dark"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="./about">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-danger"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Access Reports
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="./Reports">
                      Environment
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./Reports">
                      Security Threats
                    </a>
                  </li>
                  {/* <li><hr class="dropdown-divider"/></li> */}
                  <li>
                    <a class="dropdown-item" href="./Reports">
                      Natural Disaster
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./Reports">
                      Infastructure
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./Reports">
                      Others
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="./contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="./report">
                  Make Report
                </a>
              </li>
            </ul>
          </div>
          <div className="report">
            <a href="./report" className="btn btn-danger">
              Report A Need
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
