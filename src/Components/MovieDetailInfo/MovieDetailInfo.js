import React from 'react';
import { Button } from "@material-ui/core";
import { useSelector } from 'react-redux';

export default function MovieDetailInfo(props) {
  const {movieDetail} = useSelector(state => state.MovieReducer)
  return (
    <div className="movie-detail-info">
        <div className="container row">
          <div className="img">
            <img src={movieDetail.hinhAnh} alt={movieDetail.tenPhim} />
          </div>
          <div className="info">
            <p>{movieDetail.ngayKhoiChieu}</p>
            <h3>{movieDetail.tenPhim}</h3>
            <Button>Mua Vé</Button>
          </div>
          <div className="chart-rating"></div>
        </div>
      </div>
  )
}
