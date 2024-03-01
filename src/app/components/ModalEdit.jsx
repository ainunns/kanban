import "./../../styles/app/task/new-ticket.css";

import * as React from "react";
import toast from "react-hot-toast";

import ReactModal from "../../components/Modal";
import api from "../../lib/api";

export default function ModalEditTicket({ open, setOpen, dataModal }) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [dueDate, setDueDate] = React.useState(0);
  const [tags, setTags] = React.useState("");
  const [status, setStatus] = React.useState("backlog");

  React.useEffect(() => {
    setTitle(dataModal?.title);
    setDescription(dataModal?.description);
    setTags(dataModal?.tags.toString());
    setStatus(dataModal?.status);

    const dueDate = dataModal?.dueDate
      ? new Date(dataModal.dueDate).getTime()
      : null;
    const currentTime = new Date().getTime();

    if (dueDate !== null) {
      const timeDifference = Math.max(0, dueDate - currentTime);
      const daysDifference = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));
      setDueDate(daysDifference);
    } else {
      setDueDate(0);
    }
  }, [
    dataModal?.title,
    dataModal?.description,
    dataModal?.dueDate,
    dataModal?.tags,
    dataModal?.status,
  ]);

  const onSubmit = () => {
    const date = new Date();
    date.setDate(date.getDate() + dueDate);
    console.log(date);
    const data = {
      title,
      description,
      dueDate: date,
      tags: tags.split(","),
      status: status,
    };

    api.put(`/task/${dataModal?._id}`, data).then(() => {
      toast.success("Ticket has successfully updated");
      setOpen(false);
      // window.location.reload();
    });
  };

  return (
    <ReactModal
      open={open}
      setOpen={setOpen}
      title="Edit Ticket"
      action="Save"
      variant="primary"
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input__box">
          <label>
            Description <span style={{ color: "#c8654a" }}>*</span>
          </label>
          <input
            type="text"
            id="description"
            required=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input__box">
          <label>
            Due Date in (days) <span style={{ color: "#c8654a" }}>*</span>
          </label>
          <input
            type="number"
            id="dueDate"
            required=""
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="input__box">
          <label>
            Tags (separate with commas){" "}
            <span style={{ color: "#c8654a" }}>*</span>
          </label>
          <input
            type="text"
            id="tags"
            required=""
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
      </form>
    </ReactModal>
  );
}
