import React, { useState, useEffect } from "react";
import "./MemberList.css";
import SingleMember from "./SingleMember";

//Assets
import member1 from "../../assets/images/members/member1.jpg";
import member2 from "../../assets/images/members/member2.jpg";
import member3 from "../../assets/images/members/member3.jpg";
import SideNav from "./SideNav";

function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {}, []);
  return (
    <div className="memberList">
      <div className="sidenav">
        <SideNav />
      </div>
      <div className="mainBody">
        {/* ------ overviews ------- */}
        <div className="overview-container">
          <div className="overview">
            <div className="overview-value">
              <h2>Members</h2>
              <h1>+1200</h1>
            </div>
            <div className="overview-logo memberr">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-users"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
          </div>
          <div className="overview">
            <div className="overview-value">
              <h2>Projects</h2>
              <h1>+220</h1>
            </div>
            <div className="overview-logo projects">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-award"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
          </div>
          <div className="overview">
            <div className="overview-value">
              <h2>Donation</h2>
              <h1>$ 50,00</h1>
            </div>
            <div className="overview-logo donations">৳</div>
          </div>
        </div>

        {/* ---------- Heading ----------- */}
        <div className="heading">
          <div className="heading-pri">
            <h2>Recent Members</h2>
          </div>
        </div>

        <div className="recentMembers">
          <div className="head">
            <div className="member-info">Member</div>
            <div className="donation-info">Status</div>
            <div className="donation-amount"> Donated</div>
            <div className="volntr">Participation</div>
          </div>

          <SingleMember
            name={"Md. Mizanur Rahman"}
            joined={"20 JAN 2020"}
            image={member1}
            status={"yearly"}
            donated={"1000"}
            volntr={"14"}
          />
          <SingleMember
            name={"Barik Sadik"}
            joined={"06 FEB 2020"}
            image={member2}
            status={"weekly"}
            donated={"12000"}
            volntr={"22"}
          />
          <SingleMember
            name={"Sabbir Hasan"}
            joined={"22 JUN 2016"}
            image={member3}
            status={"monthly"}
            donated={"2000"}
            volntr={"11"}
          />
          <SingleMember
            name={"Abdur Rakib"}
            joined={"14 FEB 2012"}
            image={member2}
            status={"weekly"}
            donated={"1300"}
            volntr={"12"}
          />
        </div>
      </div>
    </div>
  );
}

export default MemberList;
