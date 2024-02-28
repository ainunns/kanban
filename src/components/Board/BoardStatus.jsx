import "./../../styles/components/board.css";

import clsx from "clsx";
import * as React from "react";
import { FaPlus } from "react-icons/fa";

import {
  BoardColorRecord,
  BorderTopBoardColorRecord,
} from "../../constants/BoardColor";
import BoardTicket from "./BoardTicket";

export default function Board({ title, ticketCount }) {
  return (
    <div
      className={clsx(
        "board",
        title === "Backlog" && BorderTopBoardColorRecord.BACKLOG,
        title === "Ready" && BorderTopBoardColorRecord.READY,
        title === "In Progress" && BorderTopBoardColorRecord.IN_PROGRESS,
        title === "Done" && BorderTopBoardColorRecord.DONE
      )}
    >
      <div className="board__header">
        <div className="board__header__content">
          <h2 className="board__header__title">{title}</h2>
          <span
            className={clsx(
              "board__header__ticket-count",
              title === "Backlog" && BoardColorRecord.BACKLOG,
              title === "Ready" && BoardColorRecord.READY,
              title === "In Progress" && BoardColorRecord.IN_PROGRESS,
              title === "Done" && BoardColorRecord.DONE
            )}
          >
            {ticketCount}
          </span>
        </div>
        <button
          className={clsx(
            "board__header__add-ticket",
            title === "Backlog" && BoardColorRecord.BACKLOG,
            title === "Ready" && BoardColorRecord.READY,
            title === "In Progress" && BoardColorRecord.IN_PROGRESS,
            title === "Done" && BoardColorRecord.DONE
          )}
        >
          <FaPlus size={16} fontWeight={400} />
        </button>
      </div>
      <div className="board__content">
        <BoardTicket
          title="Ticket 1"
          description="This is a ticket description"
        />
      </div>
    </div>
  );
}
