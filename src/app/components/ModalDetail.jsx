import "./../../styles/app/task/detail.css";

import * as React from "react";
import toast from "react-hot-toast";
import { FaCalendar, FaPencilAlt } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";

import Chips from "../../components/Chips";
import ReactModal from "../../components/Modal";
import api from "../../lib/api";
import { randomColor, showFormattedDate } from "../../lib/helper";

export default function ModalDetail({ open, setOpen, dataModal }) {
  return (
    <ReactModal
      open={open}
      setOpen={setOpen}
      title="Detail Ticket"
      action="Delete"
      variant="danger"
      handleAction={() => {
        api.delete(`/task/${dataModal?._id}`).then(() => {
          toast.error("Ticket has been deleted");
          setOpen(false);
          window.location.reload();
        });
      }}
    >
      <section className="section__detail">
        <div>
          <div className="section__detail__header">
            <div className="section__detail__content">
              <p className="section__detail__content__title">
                {dataModal?.title}
              </p>
              <div className="section__detail__content__stats">
                <div className="section__detail__content__stats section__detail__content__stats-gap">
                  <GrStatusGood className="section__detail__content__stats--status-icon" />
                  <p className="section__detail__content__stats--status">
                    {dataModal?.status}
                  </p>
                </div>
                <div className="section__detail__content__stats section__detail__content__stats-gap">
                  <FaCalendar className="section__detail__content__stats--date-icon" />
                  <p className="section__detail__content__stats--date">
                    {showFormattedDate(dataModal?.dueDate)}
                  </p>
                </div>
              </div>
            </div>
            <button type="button" className="section__action__button--edit">
              <FaPencilAlt />
              {"    "}Edit
            </button>
          </div>
          <div className="section__detail__content--tags">
            {dataModal?.tags.map((tag) => (
              <Chips color={randomColor()} key={tag}>
                {tag}
              </Chips>
            ))}
          </div>
        </div>
        <p>{dataModal?.description}</p>
      </section>
    </ReactModal>
  );
}
