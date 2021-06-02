import carousel1 from "./../Assets/img/carousel_1.jpg";
import carousel2 from "./../Assets/img/carousel_2.jpg";

export const NAVLIST = [
  {
    value: 0,
    name: "Phim",
    idIntroView:'#movie',
  },
  {
    value: 1,
    name: "Cụm Rạp",
    idIntroView:'#cinema',
  },
  {
    value: 2,
    name: "Tin Tức",
    idIntroView:'#new',
  },
  {
    value: 3,
    name: "Ứng Dụng",
    idIntroView:'#aplication',
  },
];
export const CAROUSELLIST = [
  {
    value: 0,
    path: carousel1,
  },
  {
    value: 1,
    path: carousel2,
  },
];
export const GET_MOVIE_BY_GROUP = "GET_MOVIE_BY_GROUP";
export const GET_MOVIE_PLAY = 'GET_MOVIE_PLAY';
export const CLOSE_MODAL_PLAY = 'CLOSE_MODAL_PLAY'
