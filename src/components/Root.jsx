import React from 'react';
import { Outlet } from 'react-router-dom';
import { FavoriteProvider } from '../contexts/FavoriteContext';
import { SearchProvider } from '../contexts/SearchContext';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

const Root = () => {
  return (
    <div className="App">
      <SearchProvider>
        <FavoriteProvider>
          <Header />
          <Outlet />
        </FavoriteProvider>
      </SearchProvider>
    </div>
  );
};

export default Root;
