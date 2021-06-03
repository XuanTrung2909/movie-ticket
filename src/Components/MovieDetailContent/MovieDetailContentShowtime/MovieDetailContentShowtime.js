import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getMovieDetail } from '../../../Redux/Actions/MovieAction';


export default function MovieDetailContentShowtime(props) {
  const {movieDetail} = useSelector(state => state.MovieReducer)
  
  
  const renderCinemaSystem = () => {
    return movieDetail.heThongRapChieu.map((cinemaSystem) => {
      return (
        <Tab>
          <img src={cinemaSystem.logo} alt='' />
        </Tab>
      )
    })
  }
  console.log(movieDetail);
  // console.log(idMovie);
  // const renderCineplex = () => {
  //   movieDetail.heThongRapChieu.map((cinemaSystem) => {
  //     return cinemaSystem.map((cineplex, i) => {
  //       return(
  //         <TabPanel>
  //           <h2>Any content {cineplex.tenCumRap}</h2>
  //         </TabPanel>
  //       )
  //     })
  //   })
  // }
  return (
    <div className="showtime">
      <Tabs>
        <TabList>
          {renderCinemaSystem()}
        </TabList>

        {/* {renderCineplex()} */}
      </Tabs>
    </div>
  )
}
