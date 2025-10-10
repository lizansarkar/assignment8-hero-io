import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "./Root";
import PageNotFound from "../pages/error-page/PageNotFound";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import { CardDetails } from "../components/CardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageNotFound></PageNotFound>,
    // children:
    children: [
      {
        index: true,
        loader: () => fetch("/home.json"),
        path: "/",
        Component: Home,
        errorElement: <PageNotFound></PageNotFound>,
      },
      {
        path: "/apps",
        loader: () => fetch("/apps.json"),
        Component: Apps,
        errorElement: <PageNotFound></PageNotFound>,
      },
      {
        path: "/installation",
        loader: () => fetch("/apps.json"),
        Component: Installation,
        errorElement: <PageNotFound></PageNotFound>,
      },
      {
        path: "/cardDetails/:id",
        loader: () => fetch("/apps.json"),
        Component: CardDetails,
      },
      // {
      //   path: "/cardDetails/:id",
      //   loader: () => fetch("/home.json"),
      //   Component: CardDetails,
      // },
    ],
  },
]);
