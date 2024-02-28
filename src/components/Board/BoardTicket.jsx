import * as React from "react";
import "./../../styles/components/board.css";
import Chips from "../Chips";
import { FaCalendar } from "react-icons/fa";

export default function BoardTicket({ title, description }) {
  return (
    <div className="board__content__ticket">
      <div className="board__content__ticket__tags">
        <Chips children="FE" color="primary" />
        <Chips children="BE" color="success" />
        <Chips children="UI/UX" color="warning" />
        <Chips children="Infra" color="danger" />
        <Chips children="QA" color="default" />
      </div>
      <div className="board__content__ticket__detail">
        <h3 className="board__content__ticket__title">{title}</h3>
        <p className="board__content__ticket__description">{description}</p>
      </div>
      <div className="board__content__ticket__date">
        <FaCalendar
          size={16}
          fontWeight={400}
          className="board__content__ticket__date__icon"
        />
        <p className="board__content__ticket__date__text">8 October 2024</p>
      </div>
    </div>
  );
}
