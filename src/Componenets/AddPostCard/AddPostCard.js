import React from "react";
import "./AddPostCard.scss";
import AddCircleIcon from "@material-ui/icons/AddCircle";
const AddPostCard = ({ clickFunction }) => {
  return (
    <div onClick={clickFunction} className="addcard">
      <AddCircleIcon className="span" />
      <p>Add Project</p>
    </div>
  );
};

export default AddPostCard;
