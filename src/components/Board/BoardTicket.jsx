import "./../../styles/components/board.css";

import * as React from "react";
import { FaCalendar } from "react-icons/fa";

import Chips from "../Chips";

export default function BoardTicket({ title, description }) {
  return (
    <div className="board__content__ticket">
      <div className="board__content__ticket__tags">
        <Chips color="primary">FE</Chips>
        <Chips color="success">BE</Chips>
        <Chips color="warning">UI/UX</Chips>
        <Chips color="danger">Infra</Chips>
        <Chips color="default">QA</Chips>
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
