import {GET_MOVIE_BY_GROUP, GET_MOVIE_PLAY, CLOSE_MODAL_PLAY, GET_MOVIE_DETAIL} from './../../Ulti/constants';

const stateDefault = {
  movieList: [],
  openModalPlay: false,
  linkTrailer: '',
  movieDetail: {},
}
export const MovieReducer = (state=stateDefault, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_GROUP:{
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
    case GET_MOVIE_DETAIL:{
      state.movieDetail = action.movieDetail;
      return {... state};
    }
  
    default: return {...state};
  }
}