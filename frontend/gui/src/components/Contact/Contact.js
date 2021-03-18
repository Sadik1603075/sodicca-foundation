import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api2/")
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(contacts);

  return (
    <div className="contactt">
      <h1>Help Requests</h1>

      <div className="helps">
        {/* HEADING */}
        <div className="help head">
          <div className="name">Name</div>
          <div className="mail">Email</div>
          <div className="message">Message</div>
        </div>

        {/* HELP LISTS */}
        {contacts &&
          contacts.map((el) => (
            <div to="/" className="help">
              <div className="name">
                {el.author === "" ? "নাম প্রকাশে অনিচ্ছুক" : el.author}
              </div>
              <div className="mail">{el.email}</div>
              <div className="message">{el.content}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Contact;
