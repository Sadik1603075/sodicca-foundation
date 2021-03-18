import React, { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import "./Footer.css";
import axios from "axios";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, message);

    axios
      .post("http://127.0.0.1:8000/api2/", {
        email: email,
        content: message,
        author: name,
      })
      .then(() => {
        <p className="footer firstBlock">Thank You , We will Contact you soon</p>
        console.log("Successfully Submitted");
        setName("")
        setMessage("")
        setEmail("")
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="footer">
      <div className="firstBlock">
        <div className="left">
          <img src={logo} alt="" />
          <div>
            Shodiccha is a volunteering Agency. Humanity, Strictures,Collaborate
            is our motto.
          </div>
        </div>

        <div className="middle">
          <h2>
            <span>Find</span> us
          </h2>
          <div className="bloc">
            <div className="logo">
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
                class="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>+998 2122</div>
          </div>
          <div className="bloc">
            <div className="logo">
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
                class="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>shodiccha@gmail.com</div>
          </div>
          <div className="bloc">
            <div className="logo">
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
                class="feather feather-map-pin"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>Colony near Police line school, Bogra</div>
          </div>
        </div>
      </div>

      <div className="right">
        <h2>
          <span>Contact</span> with us
        </h2>
        <p>Send us a message for any queries and help</p>

        <form>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            value={name}
          />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            value={message}
          ></textarea>

          <button type="submit" onClick={formSubmitHandler}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
