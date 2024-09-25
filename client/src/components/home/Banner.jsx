import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material";
import { bannerData } from "../../constants/constants";

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "280px",
  [theme.breakpoints.down("lg")]: {
    objectFit: "cover",
    height: 180,
  },
}));
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Banner() {
  return (
    // Some props are mandatory in the react-multi-carousel library to be passed.
    // responsive
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      slidesToSlide={1}
      keyBoardControl={true}>
      {bannerData.map((data) => (
        <Image key={data.id} src={data.url} alt="banner" />
      ))}
    </Carousel>
  );
}

export default Banner;
