const API = "https://api.themoviedb.org/3"

export function get (path){
  return fetch(API + path, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjgyZjg4ZDIyNWIyYTMwNGNjZWQ4Y2I0NTIyNWUyZCIsInN1YiI6IjYyYWU3YmI5MmI5MzIwMDA2MTMzZjY4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zN3RzkOg3ReXxqojiCGcH86KITJRrmxn-HrGglj4UL8",
      "Content-Type": "application/json;charset=utf-8"
    }
  })
  .then(result => result.json())
}
