import React, { useRef } from "react";
import Slider from "react-slick";
import { CAROUSELLIST } from "../../Ulti/constants";

import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickNext: "#carousel-next",
    slickPrev: "#carousel-prev",
    arrows: false,
  };
  const sliderRef = useRef()
  const carouselNext = () => {
    sliderRef.current.slickNext();
  }
  const carouselPrev = () => {
    sliderRef.current.slickPrev();
  }

  const carouselList = CAROUSELLIST;

  const renderCarousel = () => {
    return carouselList.map((carouselItem) => {
      return (
        <div key={carouselItem.value}>
          <div className="carousel-item">
            <img src={carouselItem.path} alt="carousel" />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="carousel">
      <Slider {...settings} ref={sliderRef}>
        {renderCarousel()}
      </Slider>
      <Button onClick={carouselPrev} className='carousel-prev' ><ArrowBackIosIcon></ArrowBackIosIcon></Button>
      <Button onClick={carouselNext} className='carousel-next' ><ArrowForwardIosIcon></ArrowForwardIosIcon></Button>
    </div>
  );
}
