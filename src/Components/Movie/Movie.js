import React from "react";
import Modal from "../Modal/Modal";
import MovieList from "./MovieList/MovieList";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

export default function Movie(props) {
  const handleActiveTab = (event) => {
    event.target.classList.add('active');
  }
  return (
    <div className="movie">
      <Tabs className='tabs'>
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

      <Modal />
    </div>
  );
}
