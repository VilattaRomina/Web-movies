
const API = "https://api.themoviedb.org/3"

function getApi(path) {

    return fetch(API + path , {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjI3ODA5NGM2ZWRhYjQzM2MzODNmY2IzNWJjOWMyOSIsInN1YiI6IjYyZTJmMjM1MGU1YWJhMDA2MzAyZDFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bIkoQYQHqa7wQdMS07HtgnaUJQaTctI5aN1yBDOYvfQ",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((result) => result.json())
}

export default getApi