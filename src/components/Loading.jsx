import "./../styles/components/loading.css";

import * as React from "react";
import { ImSpinner9 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="container__loading">
      <ImSpinner9 className="container__loading__spinner" />
      <p className="container__loading__text">Loading...</p>
    </div>
  );
}
