import "./../styles/components/modal.css";

import clsx from "clsx";
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
  variant,
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
            className={clsx(
              variant === "primary" &&
                "modal__button modal__button--primary-outline",
              variant === "danger" &&
                "modal__button modal__button--danger-outline",
              variant === "success" &&
                "modal__button modal__button--success-outline"
            )}
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className={clsx(
              variant === "primary" && "modal__button modal__button--primary",
              variant === "danger" && "modal__button modal__button--danger",
              variant === "success" && "modal__button modal__button--success"
            )}
            onClick={handleAction}
          >
            {action}
          </button>
        </div>
      </div>
    </Modal>
  );
}
