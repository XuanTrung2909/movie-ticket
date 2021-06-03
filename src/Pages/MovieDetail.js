
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../Redux/Actions/MovieAction";

import MovieDetailInfo from "../Components/MovieDetailInfo/MovieDetailInfo";
import MovieDetailContent from "../Components/MovieDetailContent/MovieDetailContent";

export default function MovieDetail(props) {
  const { movieDetail } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();
  const idMovie = props.match.params.idMovie;
  useEffect(() => {
    dispatch(getMovieDetail(idMovie));
  }, []);
  return (
    <div className="movie-detail">
      <MovieDetailInfo/>
      <MovieDetailContent />
    </div>
  );
}
