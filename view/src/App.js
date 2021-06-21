import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useContext } from 'react';
import Routes from './components/routes/Routes';
import AuthContext, { authorized } from './context/AuthContext';

function App() {

  return (
    <div className="container">
      <AuthContext>
        <Routes/>
      </AuthContext>
    </div>
  );
}

export default App;
