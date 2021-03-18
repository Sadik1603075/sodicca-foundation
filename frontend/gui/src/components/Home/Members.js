import React from "react";
import { Link } from "react-router-dom";
import Member from "./member";

// ASSETS
import member1 from "../../assets/images/members/rm1.jpg";
import member2 from "../../assets/images/members/rm2.jpg";
import member3 from "../../assets/images/members/rm3.jpg";

function Members() {
  return (
    <div className="members">
      <h1>Our teams</h1>

      <div className="all-members">
        {/* member - 1 */}
        <Member
          name="Rakibul Hasan Shuvo"
          designation="Secretary"
          speech="Pellentesque at massa mollis, ornare mi quis, rhoncus est. Morbi sed arcu pellentesque, ultricies orci sit amet"
          image={member1}
        />
        {/* member - 2 */}

        <Member
          name="Bayjid Badhon"
          designation="President"
          speech="Pellentesque at massa mollis, ornare mi quis, rhoncus est. Morbi sed arcu pellentesque, ultricies orci sit amet"
          image={member2}
        />

        {/* member - 3 */}
        <Member
          name="Mohse Hossain"
          designation="General Secretary"
          speech="Pellentesque at massa mollis, ornare mi quis, rhoncus est. Morbi sed arcu pellentesque, ultricies orci sit amet"
          image={member3}
        />
      </div>

      <div style={{ textAlign: "center", padding: "30px 0" }}>
        <Link to="/members" className="viewmore">
          View More
        </Link>
      </div>
    </div>
  );
}

export default Members;
