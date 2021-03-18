import React from "react";

function Member(props) {
  return (
    <div className="member">
      <div className="member-container">
        <div className="member-image">
          <img src={props.image} alt="" />
        </div>
        <div className="member-content">
          <h2>{props.name}</h2>
          <h3>{props.designation}</h3>
          <p>{props.speech}</p>
        </div>
      </div>
    </div>
  );
}

export default Member;
