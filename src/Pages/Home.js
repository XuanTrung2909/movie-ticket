import React from "react";
import Movie from "../Components/Movie/Movie";
import Carousel from './../Components/Carousel/Carousel';


export default function Home(props) {
  return (
    <div className="home">
      <Carousel></Carousel>
      <div className="container">
        <Movie></Movie>
      </div>
    </div>
  );
}
