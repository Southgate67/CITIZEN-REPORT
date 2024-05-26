import React from "react";
import BenEbuka from "../assets/Images/BenEbuka.png";
import MaryJane from "../assets/Images/MaryJane.png";
import MaryQueen from "../assets/Images/MaryQueen.png";

function About() {
  return (
    <>
      <div className=" about bg-success">
        <div className="container text-center pt-5">
          <h1
            className="mx-auto text-success"
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
        </div>
      </div>
      {/* hero section ends */}

      {/* Our History starts here */}
      <div className="container">
        <p className="px-5 pt-5">
          Founded in February 2024,{" "}
          <span className="text-success" style={{ fontWeight: 900 }}>
            CITIZEN RESPONSE
          </span>{" "}
          is a non-profit social enterprise focused on empowering residents in
          every community with the right tool that will amplify their voices. We
          aim to create a viable platform that will enhance citizens’ active
          participation in governance and in tackling the challenges in our
          communities, promote transparency, accountability, and good
          governance, and create a viable future-minded plan for sustainable
          deveopment of Nigeria.
        </p>

        {/* <p className="px-5 pt-1">
          <span className="text-success" style={{ fontWeight: 900 }}>
            CITIZEN RESPONSE
          </span> is a platform that will enable citizens to report the challenges,
          emergencies, and threats in their communities . We aim to empower
          residents in every community with the right tool that will amplify
          their voices and ensure their active contribution in enhancing
          transparency, accountability, and good governance at all levels of
          government.
        </p> */}
      </div>

      {/* our history part 1 ends here */}

      {/* our history part 2 stars here */}

      <div
        className="history-full mt-3"
        style={{ minHeight: "300px", padding: "3px 0" }}
      >
        <div className="container pt-5 px-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-dark px-5">
              <h3></h3>
              <p>
                We pride ourself as the best digital platform for citizens to
                promptly share the challenges and threats in their communities.
                We stand enviably tall as the best digital platform for citizens to promptly share the challenges and threats in their communities. Since inception, we have partnered with many key stakeholders, including federal and state government, ministries, agencies, and security forces. We have on-boarded nearly two-third of the communities in Southeast of Nigerian and aim to cover the entire country before one year.
              </p>
            </div>

            <div className="col-md-3"></div>

            <div className="key-service col-md-3 text-center" data-aos="fade-up">
              <h5 className="" style={{ color: "red", fontWeight: "750" }}>
                KEY SERVICES
              </h5>

              <div className="text-success">
                <p>User Registration</p>
                <p>Needs Reporting</p>
                <p>Tracking and Monitoring</p>
                <p>Government Engagement</p>
                <p>Community Engagement</p>
                <p>Feedback Mechanism</p>
                <p>Access to Data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our history part 2 ends here */}

      {/* founders section starts here */}

      <div className="">
        <div className="founders container mt-5 text-center">
          <div className="col-md-12 text-dark">
            <h3>Founders</h3>
          </div>
        </div>
      </div>

      {/* founder (ben) starts here */}

      <div className="ben" style={{ minHeight: "300px", padding: "3px 0" }}>
        <div className="container pt-3 pb-3" data-aos="fade-right">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 text-light">
              <div className="flex-grow-1 ms-2" >
                <img
                  src={BenEbuka}
                  className="img-fluid rounded"
                  style={{ width: "350px" }}
                  alt=""
                />
              </div>
              <h6 className="pt-3" style={{ marginLeft: "8rem" }}>
                Team Lead
              </h6>
              <h5 className="px-5 pt-3 text-center">
                Oji Benedict Chukwuebuka
              </h5>
              <h6 className="text-center" style={{ fontSize: "13px" }}>
                Co-founder | Frontend Developer | Content Writer | Author |
                Business Development Expert
              </h6>
            </div>

            <div className="col-md-1"></div>

            <div className="key-service col-md-7 text-justify">
              <p className="pt-5">
                Benedict is a seasoned management professional with more than 15
                years of business development and management experience spanning
                the academic, banking, and manufacturing sectors. He is adept at
                content creation, an astute business-minded individual, a
                resilient entrepreneur. He is the founder and CEO of Saint
                Benedict Plastics – a plastic/polythene manufacturing firm in
                Nigeria, and the Co-founder of Citizen Response. Benedict is
                also a commercial farmer, novelist, and web developer.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* founder (ben) ends here */}

      {/* founder (maryjane) starts here */}

      <div
        className="jane mt-3"
        style={{ minHeight: "300px", padding: "3px 0" }}
      >
        <div className="container pt-3 pb-3" data-aos="fade-left">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 text-light">
              <div className="flex-grow-1 ms-2">
                <img
                  src={MaryJane}
                  className="img-fluid rounded"
                  style={{ width: "350px", height: "270px" }}
                  alt=""
                />
              </div>
              <h6 className="pt-3 text-center">CHIEF OPERATING OFFICER</h6>
              <h5 className="px-5 pt-3 text-center">Nwankwo MaryJane</h5>
              <h6 className="text-center" style={{ fontSize: "13px" }}>
                Co-founder | Backend Engineer | STEM Tutor | Research Expert
              </h6>
            </div>

            <div className="col-md-1"></div>

            <div className="key-service col-md-7 text-justify">
              <p className="text-light" style={{ paddingTop: "6rem" }}>
              With over 10 years of experience in STEM, MaryJane impacts knowledge to students at all levels to gain requisite knowledge. As a proficient full-stack web developer, she creates appealing and user-friendly dynamic websites and applications, helping organizations to leverage the opportunities in the digital space to grow their business. With requisite research skills, she empowers her clients to draw insights from different data and fields of knowledge. She is the founder of De MJ Enterprise, RCR (Rapid Crime Report), and co-founder of CITIZEN RESPONSE.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* founder (maryjane) ends here */}

      {/* founder (maryqueen) starts here */}
      <div
        className="queen mt-3"
        style={{ minHeight: "300px", padding: "3px 0" }}
      >
        <div className="container pt-3 pb-3" data-aos="fade-right">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 text-light">
              <div className="flex-grow-1 ms-2">
                <img
                  src={MaryQueen}
                  className="img-fluid rounded"
                  style={{ width: "330px", height: "270px" }}
                  alt=""
                />
              </div>
              <h6 className="pt-3 text-center">CHIEF TECHNOLOGY OFFICER</h6>
              <h5 className="pt-3 text-center">Okonkwo MaryQueen</h5>
              <h6 className="text-center" style={{ fontSize: "13px" }}>
                Co-founder | Frontend Engineer | Tech Tutor | Graphics Designer
              </h6>
            </div>

            <div className="col-md-1"></div>

            <div className="key-service col-md-7 text-justify">
              <p className="" style={{ paddingTop: "6rem" }}>
                Maryqueen is a passionate and dedicated Graphic Designer,
                Front-End Web Developer and a Tech Tutor with more than 10 years
                of working experience in different ICT fields. Providing
                solution to problems and making an impact in the society is my
                hobby. I have acquired the skills and knowledge necessary to
                make a project successful. <br /> <br /> Maryqueen is the CEO, Founder, and
                Co-founder of different impact-driven enterprises including:
                MARYQUEEN CONCEPTS, AGRO-FLO, and CITIZEN RESPONSE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
