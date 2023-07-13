import React, { useState, useEffect } from 'react';
import { SearchBox } from './SearchBox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import Header from './Header';
import Footer from './Footer';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const apiKey = 'c3579da55180fefba457763450270a89';


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
  
    if (searchTerm === '') {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`)
        .then(data => data.json())
        .then(data => {
          console.log(data);
          setMovies(data.results);
        });
    } else {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
        .then(data => data.json())
        .then(data => {
          console.log(data);
          setMovies(data.results);
        });
    }
  
    setSearchTerm(searchTerm);
  };

  const handleLatestMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}`)
      .then(data => data.json())
      .then(data => {
        setMovies([data]);
        setSearchTerm('');
      });
  };
  

  const handleTopRatedMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      .then(data => data.json())
      .then(data => {
        setMovies(data.results);
        setSearchTerm('');
      });
  };


  const handlePopularMovies = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`)
      .then(data => data.json())
      .then(data => {
        setMovies(data.results);
        setSearchTerm('');
      });
  };

 
  return (
    <div className="App">
    <Router>
      <Header onLogoClick={handlePopularMovies} onLatestClick={handleLatestMovies} onTopRatedClick={handleTopRatedMovies} />
      <SearchBox handleChange={handleChange} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;

