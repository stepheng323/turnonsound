/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import MainPage from './Component/MainPage/MainPage';
import SideBar from './Component/SideBar/SideBar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container app_page">
        <MainPage />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
