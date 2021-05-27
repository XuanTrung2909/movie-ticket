import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CAROUSELLIST } from "../Ulti/constants";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const carouselList = CAROUSELLIST;

  const renderCarousel = () => {
    return carouselList.map(carouselItem => {
      return(
        <div
          key={carouselItem.value}
          className="carousel-item"
          style={{ background: `url(${carouselItem.path})` }}
        ></div>
      )
    })
  }

  return (
    <div className="carousel">
      <Slider {...settings}>
        {renderCarousel()}
      </Slider>
    </div>
  );
}
