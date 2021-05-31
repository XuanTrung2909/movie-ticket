import React, { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByGroup } from "../../../../Redux/Actions/MovieAction";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Rating from "@material-ui/lab/Rating";
import Slider from "react-slick";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function MovieItem(props) {
  const refSlider = useRef();
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    arrow: false,
  };

  const sliderNext = () => {
    refSlider.current.slickNext();
  };
  const sliderPrev = () => {
    refSlider.current.slickPrev()
  };
  const idGroup = props.idGroup;
  const { movieList } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieByGroup(idGroup));
  });
  const renderMovieList = () => {
    return movieList.map((movieItem, index) => {
      return (
        <div className="movie-item" key={index}>
          <div
            className="item-img"
            style={{ backgroundImage: `url(${movieItem.hinhAnh})` }}
          >
            <div className="overlay">
              <PlayCircleOutlineIcon className="icon-play"></PlayCircleOutlineIcon>
            </div>
            <div className="item-rating">
              <p>{movieItem.danhGia}</p>
              <Rating
                name="half-rating"
                defaultValue={movieItem.danhGia / 2}
                precision={0.5}
                size="small"
                className="rating"
              />
            </div>
          </div>
          <div className="item-content">
            <h3>{movieItem.tenPhim}</h3>
          </div>
        </div>
      );
    });
  };
  return (
    <Fragment>
      <Slider {...settings} ref={refSlider}>{renderMovieList()}</Slider>

      <Button className="slider-prev" onClick={sliderPrev}>
        <ArrowBackIosIcon></ArrowBackIosIcon>
      </Button>
      <Button className="slider-next" onClick={sliderNext}>
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
      </Button>
    </Fragment>
  );
}
