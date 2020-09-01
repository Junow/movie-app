export const fetcher = (url:string) => fetch(url, {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTc2ODJlMzIwZmU4ODdjMjljODk3MjIzOGUxODkyNSIsInN1YiI6IjVmM2Y1MmQwMTlhYjU5MDAzNjFkYjUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BR9IiaCG3OiWTTrcxItmXkps8mP-H-VS6kIixplZeK8'
  }
}).then(res => res.json());
