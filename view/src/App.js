import './App.css';
import React from 'react';
import Routes from './components/routes/Routes';
import AuthContext from './context/AuthContext';
import axios from 'axios';
axios.defaults.withCredentials=true;



function App() {

  return (
    <div>
      <AuthContext>
        <Routes />
      </AuthContext>
    </div>
  );
}

export default App;
