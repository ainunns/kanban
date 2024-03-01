import "./../../styles/app/task/new-ticket.css";

import * as React from "react";
import toast from "react-hot-toast";

import ReactModal from "../../components/Modal";
import api from "../../lib/api";

export default function ModalCreateTicket({ open, setOpen, status }) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [dueDate, setDueDate] = React.useState(0);
  const [tags, setTags] = React.useState("");

  const onSubmit = () => {
    const data = {
      title,
      description,
      dueDate,
      tags: tags.split(","),
      status: status.toLowerCase(),
    };

    api.post(`/task`, data).then(() => {
      toast.success("Ticket has successfully created");
      setOpen(false);
      window.location.reload();
    });
  };

  return (
    <ReactModal
      open={open}
      setOpen={setOpen}
      title="Add Ticket"
      action="Save"
      variant="success"
      handleAction={() => onSubmit()}
    >
      <form className="form__container">
        <div className="input__box">
          <label>
            Title <span style={{ color: "#c8654a" }}>*</span>
          </label>
          <input
            type="text"
            id="title"
            required=""
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input__box">
          <label>
            Description <span style={{ color: "#c8654a" }}>*</span>
          </label>
          <input
            type="text"
            id="title"
            required=""
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input__box">
          <label>
            Due Date in (days) <span style={{ color: "#c8654a" }}>*</span>
          </label>
          <input
            type="number"
            id="title"
            required=""
            onChange={(e) => {
              const date = new Date();
              date.setDate(date.getDate() + Number(e.target.value));
              setDueDate(date);
            }}
          />
        </div>
        <div className="input__box">
          <label>
            Tags (separate with commas){" "}
            <span style={{ color: "#c8654a" }}>*</span>
          </label>
          <input
            type="text"
            id="title"
            required=""
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
      </form>
    </ReactModal>
  );
}
