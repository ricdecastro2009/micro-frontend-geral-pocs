import './App.css';
//Corrigir aqui essa injeção com a importação da aplicação shell

import React from 'react';
//import Header from "Shell/Header";

function App() {
  //const Header = React.lazy(() => import("Shell/Header"))
  //const PaymentsCard = React.lazy(() => import("Payments/Card"))

  return (
    <div className="App">
      <header className="App-header">
        <p>
         Aqui é o Statement.
        </p>
        {/* <Header></Header>  */}
      </header>
    </div>
  );
}

export default App;
