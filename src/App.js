import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Planets from './pages/Planets';

function App() {
  return (
    <PlanetsProvider>
      <Planets />
    </PlanetsProvider>
  );
}

export default App;
