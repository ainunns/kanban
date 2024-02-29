import "./../../styles/components/board.css";

import * as React from "react";
import { FaCalendar } from "react-icons/fa";

import ContentDetail from "../../app/components/ContentDetail";
import { showFormattedDate } from "../../lib/helper";
import Chips from "../Chips";
import ReactModal from "../Modal";

export default function BoardTicket({
  data,
  open,
  setOpen,
  dataModal,
  setDataModal,
}) {
  const tags = data.tags;

  const randomColor = () => {
    const colors = ["primary", "success", "warning", "danger"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <ReactModal
        open={open}
        setOpen={setOpen}
        title="Lihat Detail Task"
        action="Edit"
      >
        <section className="section__detail">
          <ContentDetail title="" className="section__detail__content--tags">
            {dataModal?.tags.map((tag) => (
              <Chips color="primary" key={tag}>
                {tag}
              </Chips>
            ))}
          </ContentDetail>
          <ContentDetail title="Title">
            <p>{dataModal?.title}</p>
          </ContentDetail>
          <ContentDetail title="Description">
            <p>{dataModal?.description}</p>
          </ContentDetail>
          <ContentDetail title="Status">
            <p>{dataModal?.status}</p>
          </ContentDetail>
          <ContentDetail title="Due Date">
            <p>{showFormattedDate(dataModal?.dueDate)}</p>
          </ContentDetail>
        </section>
      </ReactModal>
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
