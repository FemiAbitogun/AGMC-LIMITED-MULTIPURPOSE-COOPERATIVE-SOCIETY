import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Routes from './components/routes/Routes';
import AuthContext, { authorized } from './context/AuthContext';

function App() {

  return (
    <div>
      <AuthContext>
        <Routes/>
      </AuthContext>
    </div>
  );
}

export default App;
