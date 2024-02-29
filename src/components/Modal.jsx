import * as React from "react";
import { FiX } from "react-icons/fi";
import Modal from "react-overlays/Modal";

export default function ReactModal({
  open,
  setOpen,
  handleAction,
  action,
  title,
  children,
}) {
  const handleClose = () => setOpen(false);

  const renderBackdrop = (props) => (
    <div className="modal__backdrop" {...props} />
  );

  return (
    <Modal
      className="modal__container"
      show={open}
      onHide={handleClose}
      renderBackdrop={renderBackdrop}
    >
      <div className="modal__content">
        <div className="modal__content__header">
          <div className="modal__content__title">{title}</div>
          <div>
            <span className="modal__button--close" onClick={handleClose}>
              <FiX />
            </span>
          </div>
        </div>
        <div className="modal__content__desc">{children}</div>
        <div className="modal__content__footer">
          <button
            className="modal__button modal__button--outline"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="modal__button modal__button--primary"
            onClick={handleAction}
          >
            {action}
          </button>
        </div>
      </div>
    </Modal>
  );
}
