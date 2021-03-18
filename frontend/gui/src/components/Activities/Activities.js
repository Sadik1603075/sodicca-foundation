import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Activities.css";

// Components
import Activity from "./Activity";

// Assets
import member1 from "../../assets/images/members/member1.jpg";
import headImage from "../../assets/images/Activity/headImage.jpg";

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      setActivities(res.data);
      console.log(activities.image)
    });
  }, []);

  console.log(activities);

  return (
    <div className="activities">
      <div className="activities_heading">
        <div className="image">
          <img src={headImage} alt="" />
        </div>
        <div className="text">
          <div className="content">
            <h2> আপনার সদিচ্ছা হতে পারে কারো বেঁচে থাকার অবলম্বন </h2>
            <p>
               সদিচ্ছা একটি স্বেচ্ছাসেবী সংগঠন  <span>মানবতা</span>,{" "}
              <span>বন্ধন</span>,<span>সহোযগিতা </span> আমাদের মূলমন্ত্র.
            </p>
          </div>
        </div>
      </div>

      <div className="myActivities">
        {/* ////////////////////////////////////// */}
        {/* //////  A row with two items  /////// */}
        <div className="row">
          {/* ACTIVITY - 1 */}
          {activities &&
            activities.map((activity) => (
              <Link
                to={`/activities/${activity.id}/`}
                className="col-30"
                style={{
                  background: `url(${activity.image}) no-repeat center center / cover`,
                }}
              >
                <Activity
                  key={activity.id}
                  heading={activity.title}
                  author={activity.author}
                  userImg={member1}
                  date={activity.post_date}
                />
              </Link>
            ))}
        </div>

      </div>
    </div>
  );
}

export default Activities;
