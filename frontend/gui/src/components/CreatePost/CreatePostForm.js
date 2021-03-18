import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./CreatePostForm.css";
import make from "../../assets/images/CreatePost/make2.svg";

function CreatePostForm(props) {
  const [title, setTitle] = useState("");
  const [content, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const createPost = (e) => {
    e.preventDefault();
    console.log(props.userState.user);

    // Request Body
    axios
      .post("http://127.0.0.1:8000/api/", {
        title,
        content,
        author: props.userState.user.username,
        image,
      })
      .then(() => {
        setTitle("")
        setDescription("")
        setImage(null)
        console.log("POST DONE");
      })
      .catch((error) => {
        if (error.response) {
          console.log("message : ", error.message);
        } else if (error.request) {
          console.log("requst :", error.request);
        }
      });
  };

  return (
    <div className="createPost">
      <form>
        <h1>Create a post</h1>
        <p>
          Please make sure that, your post is relevant to our activity. In
          description content please mention about victims place, donation
          amount and total number of volunteer performed.
        </p>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={content}
        ></textarea>

        <input
          type="file"
          placeholder="Image"
          accept="image/png, image/jpeg"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button onClick={createPost}>CREATE A POST</button>
      </form>

      <div className="decoration">
        <img src={make} alt="" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.user,
});

export default connect(mapStateToProps)(CreatePostForm);
