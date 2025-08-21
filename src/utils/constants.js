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
      Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_KEY
    }
  };


export const SUPPORTED_LANGUAGES = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'es',
    name: 'Spanish',
  },
  {
    code: 'fr',
    name: 'French',
  }
]

