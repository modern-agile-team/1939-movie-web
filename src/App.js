import React from 'react';
import Company from './Components/Company';
import { Routes, Route } from 'react-router-dom';
import Movie from './Components/Movie';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Company />} />
        <Route path="movie" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
