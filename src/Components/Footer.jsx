import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-dark text-light mt-5 py-1">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="foot pt-3" style={{fontWeight:750}}>CITIZEN RESPONSE</h4>
              <p style={{fontWeight:450}}>
                Citizens voices are often not heard due to several hindrances.
                This negates the possibility of government staying abreast with
                the emerging challenges and problems in different communities in
                Nigeria. However,
                <a href="" className="foot text-decoration-none" style={{fontWeight:750}}>
                  {" "}
                  "CITIZEN RESPONSE"
                </a>{" "}
                provides a veritable platform for citzens to raise these challenges and get adequate attention.
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="pt-3">QUICK LINKS</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-light text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="./about" className="text-light text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="./register"
                    className="text-light text-decoration-none"
                  >
                    Access Report
                  </a>
                </li>
                <li>
                  <a
                    href="./register"
                    className="text-light text-decoration-none"
                  >
                    Contact Us.
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h4 className="pt-3">THE COMMUNITY</h4>
              <p style={{fontWeight:450}}>
                Sign up today for tips and latest news and exclusive special
                offers.
              </p>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email here"
              />
              <button className="btn btn-danger mt-3">Sign up</button>
            </div>
          </div>
        </div>
        <div className="text-center pt-5">
          © <span className="text-success" style={{fontWeight:850}}>CITIZEN RESPONSE</span> 2024 All Right Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
