import React, { lazy } from 'react';
import logo from './logo.svg';
import './App.css';

const RemoteButton = lazy(() => import('vite-react/Button'));


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <RemoteButton/>
      </header>
    </div>
  );
}

export default App;
