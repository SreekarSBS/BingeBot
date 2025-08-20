export const BINGE_LOGO = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Binge_logo.svg"
export const USER_AVATAR = "https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v2/feature/profile/38_jv.png"
export const url = 'https://api.themoviedb.org/3/movie/';
export const VIDEO_URL = 'https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US'
export const TV_SHOW_URL = 'https://api.themoviedb.org/3/tv/'
export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500/"

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjQ3MDIyZDIyZTYwMGQxYjQ0MDMyMzczNDRhZGUxOSIsIm5iZiI6MTc1NTU5ODkwOC4xOSwic3ViIjoiNjhhNDUwM2MyMDU4MjVjZGFmNDRiODBiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ALf-IWyH_JZ_Kwjft0pu17MUc5xmd-f-P8siKpfNSKg'
    }
  };