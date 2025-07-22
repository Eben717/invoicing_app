import React from 'react';
import LoginPage from './components/LoginPage';
import './app.css'; 
import Sidebar from './components/frontend/Sidebar';


function App() {
  return   (
    <div className="app-container">
      <Sidebar />
        <LoginPage />
    </div>
  );
  
}

export default App;