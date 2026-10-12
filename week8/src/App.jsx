import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import MovieCard from './components/MovieCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import './App.css';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY || 'trilogy';
const BASE_URL = 'https://www.omdbapi.com/';
export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Marvel');
  const [query, setQuery] = useState('Marvel');
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMovies = useCallback(async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      let url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;
      if (type) url += `&type=${type}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || 'No movies found matching your criteria.');
      }
    } catch (err) {
      setError(err.message || 'Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  }, [query, type]);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  return (
    <div className="app-container">
      <header className="header">
        <h1>🎬 CineSearch Explorer</h1>
        <p>Discover movies, series, and episodes in real-time</p>
      </header>
      <section className="controls">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={() => setQuery(searchTerm)}
        />
        <Filter type={type} setType={setType} />
      </section>
      <main className="content">
        {loading && <LoadingSpinner />}
        {!loading && error && (
          <ErrorMessage message={error} onRetry={fetchMovies} />
        )}
        {!loading && !error && movies.length === 0 && (
          <p className="no-results">No movies found. Try searching for another title!</p>
        )}
        {!loading && !error && movies.length > 0 && (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
