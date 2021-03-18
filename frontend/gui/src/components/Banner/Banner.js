import React from "react";
import Slider from "react-slick";
import BannerCarousel from "./BannerCarousel";
import "./Banner.css";

import headImage from "../../assets/images/Activity/help1.jpg";
import headImage2 from "../../assets/images/Activity/help2.jpg";
import headImage3 from "../../assets/images/Activity/help3.jpg";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner">
      <Slider {...settings} className="banner-carousel">
        <BannerCarousel image={headImage} />
        <BannerCarousel image={headImage2} />
        <BannerCarousel image={headImage3} />
      </Slider>
    </div>
  );
}

export default Banner;
