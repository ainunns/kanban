import "./../../styles/components/board.css";

import * as React from "react";
import { FaCalendar } from "react-icons/fa";

import ModalDetail from "../../app/components/ModalDetail";
import { randomColor, showFormattedDate } from "../../lib/helper";
import Chips from "../Chips";

export default function BoardTicket({ data, dataModal, setDataModal }) {
  const tags = data.tags;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ModalDetail open={open} setOpen={setOpen} dataModal={dataModal} />
      <div className="board__content__ticket">
        <div className="board__content__ticket__tags">
          {tags.map((tag) => (
            <Chips color={randomColor()} key={tag}>
              {tag}
            </Chips>
          ))}
        </div>
        <div className="board__content__ticket__detail">
          <h3
            className="board__content__ticket__title"
            onClick={() => {
              setDataModal(data);
              setOpen(true);
            }}
          >
            {data.title}
          </h3>
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
    </>
  );
}
