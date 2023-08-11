import React from 'react';
import { Outlet } from 'react-router-dom';
import { SearchProvider } from '../SearchContext';
import { FavoriteProvider } from '../FavoriteContext';
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
