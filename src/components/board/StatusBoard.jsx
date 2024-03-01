import "./../../styles/components/board.css";

import clsx from "clsx";
import * as React from "react";
import { FaPlus } from "react-icons/fa";

import ModalCreateTicket from "../../app/components/ModalNew";
import {
  BoardColorRecord,
  BorderTopBoardColorRecord,
} from "../../constants/BoardColor";
import BoardTicket from "./TicketBoard";

export default function Board({ title, data, dataModal, setDataModal }) {
  const ticketCount = data.length;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ModalCreateTicket open={open} setOpen={setOpen} status={title} />
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
            onClick={() => setOpen(true)}
          >
            <FaPlus size={16} fontWeight={400} />
          </button>
        </div>
        <div className="board__content">
          {data.map((ticket) => (
            <BoardTicket
              key={ticket._id}
              data={ticket}
              dataModal={dataModal}
              setDataModal={setDataModal}
            />
          ))}
        </div>
      </div>
    </>
  );
}
