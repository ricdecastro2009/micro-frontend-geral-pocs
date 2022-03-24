import React from 'react';
import Button from './components/Button';
import Router from './router';


function App() {

  return (
    <React.Suspense fallback='Loading Button'>
        <Router></Router>
      </React.Suspense>
  );
}

export default App;
