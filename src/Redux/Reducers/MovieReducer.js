import {GET_MOVIE_BY_GROUP, GET_MOVIE_PLAY, CLOSE_MODAL_PLAY} from './../../Ulti/constants';

const stateDefault = {
  movieList: [],
  openModalPlay: false,
  linkTrailer: '',


}
export const MovieReducer = (state=stateDefault, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_GROUP: {
      state.movieList = action.movieList;
      return {...state};
    }
    case GET_MOVIE_PLAY:{
      state.linkTrailer = action.linkTrailer;
      state.openModalPlay = true;
      return {...state};
    }
    case CLOSE_MODAL_PLAY:{
      state.openModalPlay = false;
      return {...state};
    }
  
    default: return {...state};
  }
}