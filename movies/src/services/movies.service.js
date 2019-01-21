import axios from 'axios'

const apiKey = '451a5c46225283a9a3e766eee8fa80ac'

export const getPopular = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&sort_by=popularity.desc`
    )
    .then(res => res.data.results)
}

export const getSearch = query => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    )
    .then(res => res.data.results)
}

export const  getRated = query => {
  return axios
    .get( `https://api.themoviedb.org/3/movie/top_rated?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=&language=en-US&page=1`
  )
  .then (res => res.data.results)
}

export const nowPlaying = query =>{
  return axios
  .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=&language=en-US&page=1`
)
 .then (res => res.data.results) 
}
