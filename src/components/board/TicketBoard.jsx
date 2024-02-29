import "./../../styles/components/board.css";

import * as React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

import { showFormattedDate } from "../../lib/helper";
import Chips from "../Chips";

export default function BoardTicket({ data }) {
  const tags = data.tags;

  const randomColor = () => {
    const colors = ["primary", "success", "warning", "danger"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="board__content__ticket">
      <div className="board__content__ticket__tags">
        {tags.map((tag) => (
          <Chips color={randomColor()} key={tag}>
            {tag}
          </Chips>
        ))}
      </div>
      <div className="board__content__ticket__detail">
        <Link to={`/task/${data._id}`}>
          <h3 className="board__content__ticket__title">{data.title}</h3>
        </Link>
        <p className="board__content__ticket__description">
          {data.description}
        </p>
      </div>
      <div className="board__content__ticket__date">
        <FaCalendar
          size={16}
          fontWeight={400}
          className="board__content__ticket__date__icon"
        />
        <p className="board__content__ticket__date__text">
          {showFormattedDate(data.dueDate)}
        </p>
      </div>
    </div>
  );
}
