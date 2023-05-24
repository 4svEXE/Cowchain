import React from "react";
import { useRoutes } from "react-router-dom";

import HomePage from "./Home";
import CasesPage from "./Cases";
import P404 from "./P404";

const routesMap = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cases",
    element: <CasesPage />,
  },
  {
    path: "*",
    element: <P404 />,
  },
];

const Routes = () => useRoutes(routesMap);

export default Routes;
