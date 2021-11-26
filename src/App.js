import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Movie from './Components/Movie';
import Company from './Components/Company';

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
