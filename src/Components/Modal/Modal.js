import React from 'react';
import ModalVideo from "react-modal-video";
import { useDispatch, useSelector } from "react-redux";
import {CLOSE_MODAL_PLAY} from './../../Ulti/constants'

export default function Modal(props) {
  const { openModalPlay, linkTrailer } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <ModalVideo
            // channel="youtube"
            autoplay
            isOpen={openModalPlay}
            videoId= {linkTrailer}
            onClose={() => {
              dispatch({
                type: CLOSE_MODAL_PLAY
              })
            }}
          />
    </div>
  )
}
