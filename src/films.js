import { movies } from './data.js';


// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map( movie => movie.director )
  console.log("EXERCISE 1 ->", result);
  return result;
}

getAllDirectors(movies)

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter( movie => movie.director === director )
 console.log("EXERCISE 2 ->", result);
 return result;
}

getMoviesFromDirector(movies, "Christopher Nolan")


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = getMoviesFromDirector(array, director);
  let scoresFromDirector = moviesFromDirector.map ( movie => movie.score)
  let result = scoresFromDirector.reduce((a, b) => a + b, 0) / scoresFromDirector.length
  result = Number(result.toFixed(2))
  console.log("EXERCISE 3 ->", result);
  return result
}

moviesAverageOfDirector(movies, "Martin Scorsese")


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  /* let result = array.sort((movie1, movie2) => (movie1.title > movie2.title) ? 1 : (movie1.title < movie2.title) ? -1 : 0) */
  let movieTitles = array.map(movie => movie.title)
  let allMoviesSorted = movieTitles.sort((movie1, movie2) => (movie1 > movie2) ? 1 : (movie1 < movie2) ? -1 : 0)
  let firstTwenty = allMoviesSorted.slice(0, 20)
  console.log("EXERCISE 4 ->", firstTwenty);
  return firstTwenty
}

orderAlphabetically(movies)


// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
/* if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
} */
export {
  getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
};