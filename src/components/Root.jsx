import React from 'react';
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
  Outlet,
} from 'react-router-dom';
import { SearchProvider } from '../SearchContext';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import Footer from './Footer';

const Root = () => {
  return (
    <div className="App">
      <SearchProvider>
        <Header />
        <Outlet />
        <Footer />
      </SearchProvider>
    </div>
  );
};

export default Root;
