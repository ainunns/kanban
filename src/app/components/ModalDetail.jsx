import * as React from "react";
import toast from "react-hot-toast";

import Chips from "../../components/Chips";
import ReactModal from "../../components/Modal";
import api from "../../lib/api";
import { randomColor, showFormattedDate } from "../../lib/helper";
import ContentDetail from "./ContentDetail";

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
        <ContentDetail title="" className="section__detail__content--tags">
          {dataModal?.tags.map((tag) => (
            <Chips color={randomColor()} key={tag}>
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
  );
}
