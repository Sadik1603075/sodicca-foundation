import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// ASSETS
import calenderr from "../../assets/images/Activity/calender.jpeg";

function About() {
  return (
    <div className="about">
      {/* motto */}
      <div className="motto">
        <div className="motto-content">
          <h2>
            <span>
              <i class="fas fa-quote-left"></i>
            </span>
            When we give cheerfully and accept gratefully, everyone is blessed
          </h2>
          <p>- Maya Angelou</p>
        </div>
      </div>
      {/* about content */}
      <div className="about-content">
        <div className="content-image">
          <img src={calenderr} className="image" alt="" />
          <div className="block-1"></div>
          <div className="block-2"></div>
          <div className="block-3"></div>
        </div>
        <div className="content-block">
          <h1>About us</h1>
          <p>
          ২০১৭ সালে কুড়িগ্রামে বন্যা কবলিত মানুষ এর দূর্বিষহ অবস্থা দেখে সাহায্যের হাত বাড়িয়ে দেয় কলেজ পড়ুয়া কয়েক জন শিক্ষার্থী। বন্যায় মানুষ কে সেবা দিতে শহরের রাস্তায় ক্যাম্প করে কলেজ বন্ধুদের জানায়। সর্বোপরি ভালো সহযোগিতা করতে সক্ষম হয় অসহায় মানুষ দের। এরপর এই একটি ফাউন্ডেশন এর চিন্তা আসে আমাদের, সকলের উদ্যোগে গঠিত হয় সদিচ্ছা ফাউন্ডেশন। আমরা আমাদের প্রতি মাসের পকেট মানির কিছু টাকা আমাদের ফাউন্ডেশন এর খাতে জমা রাখি। এভাবে ২/৩ মাস পরে আমাদের সকলের জমাকৃত অর্থ দিয়ে একজন উপযুক্ত নিরীহ মানুষ কে সহযোগিতা করে থাকি। এছাড়া প্রতি বছর বন্যায়, শীতে বা যেকোন প্রাকৃতিক দূযোর্গে অসহায় মানুষ এর পাশে যাবার জন্যে আমরা বদ্ধ পরিকর।
          </p>
          <Link to="/">
            Read more <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
