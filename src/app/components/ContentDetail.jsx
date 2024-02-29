import "./../../styles/app/task/detail.css";

import clsx from "clsx";
import * as React from "react";

export default function ContentDetail({ title, children, className }) {
  return (
    <div className={clsx("section__detail__content", className)}>
      {title === "" ? null : (
        <h3 className="section__detail__content__title">{title}</h3>
      )}
      {children}
    </div>
  );
}
