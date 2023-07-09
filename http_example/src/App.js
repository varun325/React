import  {useState, useCallback, useEffect} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies]  = useState([]);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMoviesHandlder = useCallback(async ()=>{

    // fetch('https:/swapi.dev/api/films/').then(
    //   response => {return response.json();}
    // ).then(
    //   data => {
    //       const transformedMovies = data.results.map(
    //         movieData => {
    //           return {
    //             id: movieData.episode_id,
    //             title: movieData.title,
    //             openingText: movieData.opening_crawl,
    //             releaseDate: movieData.release_date
    //           }
    //         }
    //       );
    //       setMovies(transformedMovies);
    //   }
    // )
    setLoading(true);
    try{
      setError(null);
      const response = await fetch('https:/swapi.dev/api/films/');
      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const transformedMovies = data.results.map(
        movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date
          }
        }
      );
      setMovies(transformedMovies);
      }
      catch(error){
         setError(error.message);
      }
    setLoading(false);
  },[]);

  useEffect(()=>{
    fetchMoviesHandlder();
  },[fetchMoviesHandlder]);

  let content = <p>No movies were found</p>
  if(error)
    content = <p>{error}</p>
  else if(loading)
    content = <p>Loading....</p>
  else if(movies.length===0)
    content = <p>No movies were found</p>
  else
    content = <MoviesList movies={movies}/>

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandlder}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
