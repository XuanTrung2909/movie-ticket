 import carousel1 from './../Assets/img/carousel_1.jpg';
 import carousel2 from './../Assets/img/carousel_2.jpg';

 
 
 
 export const NAVLIST = [
   {
     value: 0,
     name: 'Phim',
     path: '/phim'
   },
   {
     value: 1,
     name: 'Cụm Rạp',
     path: '/cum-rap'
   },
   {
    value: 2, 
    name: 'Tin Tức',
    path: '/tin-tức'
  },
  {
   value: 3, 
   name: 'Ứng Dụng',
   path: '/ung-dung'
 }
 ]
 export const CAROUSELLIST = [
   {
     value: 0,
     path: carousel1
   },
   {
    value: 1,
    path: carousel2
  }
 ];
 export const GET_MOVIE_BY_GROUP = 'GET_MOVIE_BY_GROUP';