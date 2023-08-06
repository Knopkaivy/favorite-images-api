import React, { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
  Outlet,
} from 'react-router-dom';
import ErrorPage from './error-page';
import Root from './components/Root';
import Header from './components/Header';
import Main from './components/Main';
import Favorite from './components/Favorite';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Footer from './components/Footer';

// const api = createApi({
//   accessKey: process.env.REACT_APP_API_KEY,
// });

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'main',
        Component: Main,
      },
      {
        path: 'favorite',
        Component: Favorite,
      },
    ],
  },
  { path: '/favorite', Component: Favorite },
  // { path: '*', Component: Root },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

// function Root() {
//   const [data, setPhotosResponse] = useState(null);
//   const random = [
//     'Ukraine',
//     'Kyiv',
//     'Lviv',
//     'Dnipro',
//     'Oregon',
//     'Switzerland',
//     'Paris',
//     'France',
//     'Colorado',
//     'Alaska',
//     'Key West',
//     'San Francisco',
//     'Germany',
//   ];

//   const fetchResults = async (q, p = 1) => {
//     return await api.search
//       .getPhotos({ query: q, page: p, perPage: 20 })
//       .then((result) => {
//         setPhotosResponse(result.response.results);
//       })
//       .catch((err) => {
//         console.log('something went wrong!');
//         console.error(err);
//       });
//   };

//   const fetchRandom = () => {
//     const i = Math.floor(Math.random() * random.length);
//     const q = random[i];
//     fetchResults(q);
//   };

//   useEffect(() => {
//     fetchRandom();
//   }, []);

//   const pageChange = (p) => {
//     // TODO - removed logic with history, need to add new logic
//     return;
//   };

//   return (
//     <div className="App">
//       <Header fetchRandom={fetchRandom} fetchResults={fetchResults} />
//       <Outlet />
//       {/* <Main data={data} /> */}
//       <Footer pageChange={pageChange} />
//     </div>
//   );
// }

// export default Root;
