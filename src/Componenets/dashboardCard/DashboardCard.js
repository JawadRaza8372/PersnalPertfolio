import React, { useState } from "react";
import "./DashboardCard.scss";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { deltData, deltImage, updateData } from "../../database/FirebaseConfig";
import { toast } from "react-toastify";
import CustomModal from "../CustomModal/CustomModal";
function DashboardCard({ data }) {
  const [updateModel, setupdateModel] = useState(false);
  const [updatePost, setupdatePost] = useState({
    title: data?.data?.title,
    subtitle: data?.data?.subtitle,
    weblink: data?.data?.weblink,
    imglink: data?.data?.imge,
    imgRef: data?.data?.imgRef,
  });
  const submitFun = async (e) => {
    e.preventDefault();
    await updateData(data.id, updatePost);
    toast.success("Project Updated!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setupdateModel(false);
  };
  const deltfunt = async () => {
    if (data?.data?.imgRef) {
      const resp = await deltImage(data?.data?.imgRef);
    }
    const resp1 = await deltData(data?.id);
    toast.success("Project Deleted!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <div className="dashboardCard">
        <img
          src={
            data?.data.imge
              ? `${data?.data.imge}`
              : "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
          }
          alt="jh"
        />
        <div className="headinClass">
          <p>{data?.data.title}</p>
        </div>

        <div>
          <button onClick={() => setupdateModel(true)} className="updatebutton">
            <EditIcon />
          </button>
          <button onClick={deltfunt} className="deltbutton">
            <DeleteIcon />
          </button>
        </div>
      </div>
      {updateModel && (
        <CustomModal
          closeFunction={() => setupdateModel(false)}
          formEnable={true}
          onSubmit={submitFun}
        >
          <>
            <h1>Update Project</h1>
            <input
              type="text"
              placeholder="Title"
              id="title"
              value={updatePost.title}
              onChange={(e) => {
                setupdatePost((prevalue) => {
                  return {
                    ...prevalue,
                    title: e.target.value,
                  };
                });
              }}
            />
            <textarea
              type="text"
              placeholder="Description"
              id="subtitle"
              value={updatePost.subtitle}
              onChange={(e) => {
                setupdatePost((prevalue) => {
                  return {
                    ...prevalue,
                    subtitle: e.target.value,
                  };
                });
              }}
            />
            <input
              type="text"
              placeholder="Hosted Link"
              id="weblink"
              value={updatePost.weblink}
              onChange={(e) => {
                setupdatePost((prevalue) => {
                  return {
                    ...prevalue,
                    weblink: e.target.value,
                  };
                });
              }}
            />

            <button type="submit">Update</button>
          </>
        </CustomModal>
      )}
    </>
  );
}

export default DashboardCard;
