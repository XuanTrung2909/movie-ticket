import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Animated } from "react-animated-css";
import { useSelector } from "react-redux";
import MovieDetailContentShowtime from "./MovieDetailContentShowtime/MovieDetailContentShowtime";

export default function MovieDetailContent(props) {
  
  return (
    <div className="movie-detail-content">
      <div className="container">
        <Tabs className="tabs" selectedTabClassName="active">
          <TabList className="title">
            <Tab>Lịch Chiếu</Tab>
            <Tab>Thông Tin</Tab>
            <Tab>Đánh Giá</Tab>
          </TabList>

          <TabPanel>
            <Animated>
              <MovieDetailContentShowtime />
            </Animated>
          </TabPanel>
          <TabPanel>
            <Animated>
              <div className="row">
                
              </div>
            </Animated>
          </TabPanel>
          <TabPanel>
            <Animated>
              <h2>Any content 3</h2>
            </Animated>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
