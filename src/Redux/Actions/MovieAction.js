import axios from 'axios';
import {GET_MOVIE_BY_GROUP, GET_MOVIE_DETAIL} from './../../Ulti/constants'

export const getMovieByGroup = (idGroup) => {
  return async(dispatch) => {
    try {
      const result = await axios({
        url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${idGroup}`,
        method: 'GET'
      })
      dispatch({
        type: GET_MOVIE_BY_GROUP,
        movieList: result.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}
export const getMovieDetail = (idMovie) => {
  return async(dispatch) => {
    try {
      const result = await axios({
        url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`,
        method: 'GET'
      });
      dispatch({
        
        type: GET_MOVIE_DETAIL,
        movieDetail: result.data
      })
      
    } catch (error) {
      console.log(error);
    }
  }
} 