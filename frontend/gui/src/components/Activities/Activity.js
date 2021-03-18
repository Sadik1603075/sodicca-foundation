import React from "react";

function Activity({ heading, author, userImg, date }) {
  return (
    <div className="activity">
      <h3>{heading}</h3>
      <div className="user">
        <img src={userImg} alt="" />
        <div className="name">
          <h5>{author}</h5>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Activity;
