import React from "react";

function SingleMember({ name, joined, image, status, donated, volntr }) {
  return (
    <div className="info">
      <div className="member-info">
        <img src={image} alt="" />
        <div className="person">
          <h3>{name}</h3>
          <p>
            <span>Joined: </span> {joined}
          </p>
        </div>
      </div>
      <div className="donation-info">
        <div className={status}>{status}</div>
      </div>
      <div className="donation-amount">৳ {donated}</div>
      <div className="volntr">{volntr}</div>
    </div>
  );
}

export default SingleMember;
