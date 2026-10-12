import React, { useState } from 'react';
export default function MovieCard({ movie }) {
  const defaultPoster = 'https://placehold.co/300x450/1e293b/f8fafc?text=No+Poster+Available';
  const [imgSrc, setImgSrc] = useState(
    movie.Poster !== 'N/A' && movie.Poster ? movie.Poster : defaultPoster
  );
  return (
    <div className="movie-card">
      <div className="poster-container">
        <img
          src={imgSrc}
          alt={movie.Title}
          loading="lazy"
          onError={() => setImgSrc(defaultPoster)}
        />
        <span className="type-badge">{movie.Type}</span>
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p className="year">Release Year: {movie.Year}</p>
      </div>
    </div>
  );
}
