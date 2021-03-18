import React from "react";

import member1 from "../../assets/images/members/member1.jpg";
import member2 from "../../assets/images/members/member2.jpg";
import member3 from "../../assets/images/members/member3.jpg";
import wave1 from "../../assets/images/waves/wave1.svg";
import wave2 from "../../assets/images/waves/wave2.svg";
import wave3 from "../../assets/images/waves/wave3.svg";
import logo from "../../assets/images/logo.jpg";

function SideNav() {
  return (
    <>
      <div className="logobox">
        <img src={logo} alt="" />
      </div>
      <div className="admins">
        <h1>Admin</h1>
        {/* admin */}
        <div className="admin">
          <img src={member1} alt="" />
          <div className="admin-name">
            <h2>Mizanur Rahman</h2>
            <h3>President</h3>
          </div>
        </div>
        {/* admin */}
        <div className="admin">
          <img src={member2} alt="" />
          <div className="admin-name">
            <h2>Mizanur Rahman</h2>
            <h3>President</h3>
          </div>
        </div>
        {/* admin */}
        <div className="admin">
          <img src={member3} alt="" />
          <div className="admin-name">
            <h2>Mizanur Rahman</h2>
            <h3>President</h3>
          </div>
        </div>
      </div>
      <div className="wave">
        <img className="wave2" src={wave3} alt="" />
        <img className="wave1" src={wave1} alt="" />
      </div>
    </>
  );
}

export default SideNav;
