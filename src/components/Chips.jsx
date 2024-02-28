import "./../styles/components/chips.css";

import clsx from "clsx";
import * as React from "react";

export default function Chips({ children, color = "default" }) {
  const chipColor =
    color === "primary"
      ? "container__chip--primary"
      : color === "success"
      ? "container__chip--success"
      : color === "warning"
      ? "container__chip--warning"
      : color === "danger"
      ? "container__chip--danger"
      : "container__chip--default";

  return (
    <div className="container">
      <div className={clsx("container__chip", chipColor)}>
        <p className="container__chip__text">{children}</p>
      </div>
    </div>
  );
}
