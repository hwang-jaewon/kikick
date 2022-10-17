// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={'http://www.stardailynews.co.kr/news/photo/202112/312214_358571_3747.jpg'}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React1
        </a>
        <Main />
      </header>
    </div>
  );
}
