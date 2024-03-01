import "./../../styles/components/board.css";

import * as React from "react";
import { FaCalendar, FaEdit } from "react-icons/fa";

import ModalDetail from "../../app/components/ModalDetail";
import ModalEditTicket from "../../app/components/ModalEdit";
import { randomColor, showFormattedDate } from "../../lib/helper";
import Chips from "../Chips";

export default function BoardTicket({ data, dataModal, setDataModal }) {
  const tags = data.tags;
  const [openDetail, setOpenDetail] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  return (
    <>
      <ModalEditTicket
        open={openEdit}
        setOpen={setOpenEdit}
        dataModal={dataModal}
      />
      <ModalDetail
        open={openDetail}
        setOpen={setOpenDetail}
        dataModal={dataModal}
      />
      <div className="board__content__ticket">
        <div className="board__content__ticket__header">
          <div className="board__content__ticket__tags">
            {tags.map((tag) => (
              <Chips color={randomColor()} key={tag}>
                {tag}
              </Chips>
            ))}
          </div>
          <button
            className="board__content__ticket__edit"
            onClick={() => {
              setDataModal(data);
              setOpenEdit(true);
            }}
          >
            <FaEdit size={16} fontWeight={400} />
          </button>
        </div>
        <div className="board__content__ticket__detail">
          <h3
            className="board__content__ticket__title"
            onClick={() => {
              setDataModal(data);
              setOpenDetail(true);
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
