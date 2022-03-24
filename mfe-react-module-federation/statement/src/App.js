import React from 'react'


function App() {
  const ShellButton = React.lazy(() => import('Shell/Button'));

  return (
    <div>
        <h2>
          Statement App
        </h2>    
        <React.Suspense fallback='Loading Button'>
          <ShellButton></ShellButton>
        </React.Suspense>     
      </div>
  );
}

export default App;
