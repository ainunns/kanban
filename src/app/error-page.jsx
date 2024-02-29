import "./../styles/app/not-found.css";

import * as React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="container__not-found">
      <img src="/images/not-found.png" alt="404" />
      <h1>{error.status + " " + error.statusText}</h1>
    </div>
  );
}
