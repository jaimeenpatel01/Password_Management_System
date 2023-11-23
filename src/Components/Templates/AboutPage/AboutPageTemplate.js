import React from "react";
import "./style.scss";
import { BreadCrumbs } from "Components/UI Components/Molecules";
import { DashboardHeader, SideBar } from "Components/UI Components/Organisms";

const AboutPageTemplate = () => {
  return (
    <div className="main_body">
      <div className="dashboard_main">
        <SideBar />
        <div className="dashboard">
          <DashboardHeader />
          <div className="breadCrumbSection">
            <BreadCrumbs pageHistory={[["Home", "/"]]} currentPage={"about"} />
          </div>

          <div className="aboutSection">
            <h3>About us</h3>
            <div className="feildSection">
              <h4>Tech Stack Used</h4>
              <p>
                1.React Native Framework <br/>
                2.HTML<br/>
                3.CSS<br/>
                4.JavaScript<br/>
                5.Bootstrap
              </p>
            </div>
            <div className="feildSection">
              <h4>About Password Management System</h4>
              <p>
              • The Password Manager is a React
              project which is used to manage and store user’s
              passwords in the Relational database i.e., RDBMS. <br/>
              • This manager can be useful in a situation where
              user has a lot of passwords and each password is
              different for every application or site that user is using. <br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageTemplate;
