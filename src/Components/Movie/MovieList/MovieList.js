import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByGroup } from "./../../../Redux/Actions/MovieAction";
import Slider from "react-slick";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import MovieItem from "./MovieItem/MovieItem";


export default function MovieList(props) {
  const { movieList } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();
  const refSlider = useRef();
  const idGroup = props.idGroup;
  useEffect(() => {
    const action = getMovieByGroup(idGroup);
    dispatch(action);
    
  },[]);
  

  const renderMovieList = () => {
    return movieList.map((movieItem, index) => {
      return (
        <div className="movie-item" key={index}>
          <MovieItem movieItem={movieItem} />
        </div>
      );
    });
  };
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesPerRow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesPerRow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesPerRow: 1
        }
      },
    ]
  };
  const sliderNext = () => {
    refSlider.current.slickNext();
  };
  const sliderPrev = () => {
    refSlider.current.slickPrev();
  };

  return (
    <div className="movie-list">
      <Slider {...settings} ref={refSlider}>
        {renderMovieList()}
      </Slider>
      <Button className="slider-prev" onClick={sliderPrev}>
        <ArrowBackIosIcon></ArrowBackIosIcon>
      </Button>
      <Button className="slider-next" onClick={sliderNext}>
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
      </Button>
    </div>
  );
}
