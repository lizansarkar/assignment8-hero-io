import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from './Root';
import PageNotFound from '../pages/error-page/PageNotFound';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageNotFound></PageNotFound>,
    // children: 
    children: [
        {
            index: true,
            loader: () => fetch('home.json'),
            path: '/',
            Component: Home,
        }
    ]
  },
  // {
  //   path: "/apps",
  //   Component: Root,
  //   errorElement: <PageNotFound></PageNotFound>,
  //   children: [
  //       {
  //           index: true,
  //           loader: () => fetch('apps.json'),
  //           path: '/',
  //           Component: Home,
  //       }
  //   ]
  // }
]);