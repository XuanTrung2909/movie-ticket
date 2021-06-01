import React, { Fragment } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { GET_MOVIE_PLAY } from "./../../../../Ulti/constants";

import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";

export default function MovieItem(props) {
  const movieItem = props.movieItem;
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div
        className="item-img"
        style={{ backgroundImage: `url(${movieItem.hinhAnh})` }}
      >
        <div className="overlay">
          <PlayCircleOutlineIcon
            className="icon-play"
            onClick={() => {
              dispatch({
                type: GET_MOVIE_PLAY,
                movieItemWatch: movieItem,
              });
            }}
          ></PlayCircleOutlineIcon>
        </div>
        <div className="item-rating">
          <p>{movieItem.danhGia}</p>
          <Rating
            name="half-rating-read"
            value={movieItem.danhGia / 2}
            precision={0.5}
            readOnly
            size="small"
          />
        </div>
      </div>
      <div className="item-content">
        <h3>{movieItem.tenPhim}</h3>
        <Link to={`/${movieItem.maPhim}`} className='link'>
          <Button>Đặt Vé</Button>
        </Link>
      </div>
    </Fragment>
  );
}
