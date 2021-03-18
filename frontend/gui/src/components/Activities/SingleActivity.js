import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Activities.css";

// Assets
import member1 from "../../assets/images/members/member1.jpg";

function SingleActivity(props) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const articleId = props.match.params.id;
    axios.get(`http://127.0.0.1:8000/api/${articleId}/`).then((res) => {
      setArticle(res.data);
    });
  }, [props.match.params.id]);

  // console.log("article: " + article.title);

  return (
    <div className="singleActivity">
      {/* ------ main image ---- */}
      <div
        className="main-image"
        style={{
          background: `url(${
            article && article.image
          }) no-repeat center center / cover`,
        }}
      ></div>

      {/* ------ author info ------- */}
      <div className="author">
        <img src={member1} alt="" />
        <div className="name">{article && article.author}</div>
      </div>

      {/* ----- main heading ---- */}
      <h1 className="main-heading">{article && article.title}</h1>

      {/* post date */}
      <p className="date">{article && article.post_date}</p>

      {/* post content */}
      <div className="main-content">
        <p>{article && article.content}</p>
      </div>

      {/* ---- top donated memers ---- */}
      {/* <div className="donar">
        <div className="heading">Top donars :</div>
        <div className="persons">
          <img src={member3} alt="" />
          <img src={member2} alt="" />
          <img src={member3} alt="" />
          <img src={member1} alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default SingleActivity;
