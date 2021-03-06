import React from "react";

import MovieList from "./MovieList/MovieList";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function Movie(props) {
  const handleActiveTab = (event) => {
    event.target.classList.add('active');
  }
  return (
    <div className="movie" id='movie'>
      <Tabs className='tabs' selectedTabClassName='active'>
        <TabList className='tablist'>
          <Tab className='tab' onClick={handleActiveTab}>Đang Chiếu</Tab>
          <Tab className='tab' onClick={handleActiveTab}>Sắp Chiếu</Tab>
        </TabList>

        <TabPanel>
          <MovieList idGroup="GP08" />
        </TabPanel>
        <TabPanel>
          <MovieList idGroup="GP09" />
        </TabPanel>
      </Tabs>

      
    </div>
  );
}
