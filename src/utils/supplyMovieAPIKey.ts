export const supplyMovieAPIKey = () => {
  let MOVIE_API_KEY = ""
  if (process.env.NODE_ENV === "development") {
    // 로컬에서 사용할 환경 변수에는 REACT_APP_ 이라는 접두사를 붙여 설정한다.
    // Reference: https://create-react-app.dev/docs/adding-custom-environment-variables/
    MOVIE_API_KEY = process.env.REACT_APP_TMDB_API_KEY
  } else {
    MOVIE_API_KEY = process.env.TMDB_API_KEY
  }
  return MOVIE_API_KEY
}