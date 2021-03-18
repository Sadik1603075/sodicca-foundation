import React from "react";

function BannerCarousel(props) {
  return (
    <div
    //   style={{
    //     background: `url(${props.image}) no-repeat center center / cover`,
    //     backgroundPosition: "center bottom",
    //   }}
    >
      <img
        src={props.image}
        height="100%"
        width="100%"
        style={{ borderRadius: "20px 0 20px 0" }}
        alt=""
      />
    </div>
  );
}

export default BannerCarousel;
