import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { GET_MOVIE_PLAY } from "../../Ulti/constants";

import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByGroup } from "../../Redux/Actions/MovieAction";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

export default function Carousel() {
  const { movieList } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieByGroup("GP08"));
  }, []);
  const renderCarousel = () => {
    return movieList.map((movieItem, index) => {
      if (index < 3) {
        return (
          <div key={index}>
            <div
              className="carousel-item"
              style={{ backgroundImage: `url(${movieItem.hinhAnh})` }}
            >
              <PlayCircleOutlineIcon
                onClick={() => {
                  dispatch({
                    type: GET_MOVIE_PLAY,
                    linkTrailer: movieItem.trailer.slice(-11),
                  });
                }}
              ></PlayCircleOutlineIcon>
            </div>
          </div>
        );
      }
    });
  };

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
  const sliderRef = useRef();
  const carouselNext = () => {
    sliderRef.current.slickNext();
  };
  const carouselPrev = () => {
    sliderRef.current.slickPrev();
  };



  return (
    <div className="carousel">
      <Slider {...settings} ref={sliderRef}>
        {renderCarousel()}
      </Slider>
      <Button onClick={carouselPrev} className="carousel-prev">
        <ArrowBackIosIcon></ArrowBackIosIcon>
      </Button>
      <Button onClick={carouselNext} className="carousel-next">
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
      </Button>
    </div>
  );
}
