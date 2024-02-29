import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../app";
import ErrorPage from "../app/error-page";
import DetailTicket from "../app/task/[id]";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/task/:_id",
    element: <DetailTicket />,
    errorElement: <ErrorPage />,
  },
]);
