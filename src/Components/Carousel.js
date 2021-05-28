import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CAROUSELLIST } from "../Ulti/constants";
import carousel1 from "./../Assets/img/carousel_1.jpg";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const carouselList = CAROUSELLIST;
  console.log(carouselList);

  // const renderCarousel = () => {
  //   return carouselList.map(carouselItem => {
  //     console.log(carouselItem.path);
  //     return(

  //       <div
  //         key={carouselItem.value}
  //         className="carousel-item"
  //         style={{backgroundImage: `url(${carouselItem.path})`}}
  //       >

  //       </div>
  //     )
  //   })
  // }

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${carousel1})` }}
        ></div>
      </Slider>
      <div
        className="carousel-item"
        style={{ backgroundImage: `url(${carousel1})` }}
      ></div>
    </div>
  );
}
