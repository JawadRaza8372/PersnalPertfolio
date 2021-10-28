import React from "react";
import "./CustomModal.scss";
import CloseIcon from "@material-ui/icons/Close";
function CustomModal({ closeFunction, formEnable, onSubmit, children }) {
  return (
    <div className="modalClass">
      <button className="closesbutton" onClick={closeFunction}>
        <CloseIcon className="closebutton" />
      </button>
      {formEnable ? (
        <form onSubmit={onSubmit}>{children}</form>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}

export default CustomModal;
