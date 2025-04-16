import React, { Fragment } from "react";
import LogoImage from "../assent/Logo.png";
import DashboardImage from "../assent/DashboardImage.png";
const DashboardPage = () => {
  return (
    <Fragment>
      <div className="h-full flex flex-col">
        <div className=" bg-[#F8FAFC] h-14 p-3">
          <img src={LogoImage} width={118} height={30} alt="logo" />
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <img src={DashboardImage} className="max-w-full h-auto" 
          alt="Dashboard"
          style={{maxWidth: '481px'}} />
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardPage;
