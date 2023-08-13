import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Favorite from './components/Favorite';
import Main from './components/Main';
import Root from './components/Root';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'favorite',
        Component: Favorite,
      },
    ],
  },
  { path: '/favorite', Component: Favorite },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
