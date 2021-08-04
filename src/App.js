// Created by Andy Czeropski && First Committed in August 2021
// This application will create a sorting algorithm visualizer
// to help understand the most common sorting algos, their 
// respective times, and what they look like



import SortingVisualizer from './SortingVisualizer/sortingVisualizer';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
