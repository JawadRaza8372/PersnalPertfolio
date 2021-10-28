import "./Dashboard.scss";
import React, { useState } from "react";
import AddPostCard from "../../Componenets/AddPostCard/AddPostCard";
import DashboardCard from "../../Componenets/dashboardCard/DashboardCard";
import CustomModal from "../../Componenets/CustomModal/CustomModal";
import { uploadImage, postData } from "../../database/FirebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
function Dashboard() {
  const { projects } = useSelector((state) => state.project);
  const [addModel, setaddModel] = useState(false);
  const [imgName, setimgName] = useState(null);
  const [addPost, setaddPost] = useState({
    title: "",
    subtitle: "",
    weblink: "",
    imglink: null,
    imgRef: null,
  });
  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setaddPost((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    setimgName(file.name);
    const resp = await uploadImage(file);
    console.log(resp);
    if (resp?.imglink && resp?.imgref) {
      setaddPost((prevalue) => {
        return {
          ...prevalue,
          imglink: resp?.imglink,
          imgRef: resp?.imgref,
        };
      });
    }
  };
  const submitFun = async (e) => {
    e.preventDefault();
    if (navigator.onLine) {
      const resp = await postData(addPost);
      resp?.data && !resp?.error
        ? toast.success("Project Added!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        : toast.error(`${resp.error}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      setaddModel(false);
    } else {
      toast.warn("No Internet Connection!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <div className="container">
        <div className="dashboardGrid">
          <AddPostCard clickFunction={() => setaddModel(true)} />
          {projects?.map((proj) => (
            <DashboardCard key={proj.id} data={proj} />
          ))}
        </div>
      </div>
      {addModel && (
        <CustomModal
          closeFunction={() => setaddModel(false)}
          formEnable={true}
          onSubmit={submitFun}
        >
          <>
            <h1>Add Project</h1>
            <input
              type="text"
              placeholder="Title"
              id="title"
              onChange={handleChange}
            />
            <textarea
              type="text"
              placeholder="Description"
              id="subtitle"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Hosted Link"
              id="weblink"
              onChange={handleChange}
            />
            <div className="uploadImagebutton">
              <label htmlFor="filePicker" className="termText2">
                {imgName ? `You Selected ${imgName}` : "Choose Image"}
              </label>
              <input
                id="filePicker"
                type="file"
                name="myfile"
                onChange={handleUploadImage}
                accept="image/png,image/jpg,image/jpeg,image/gif"
              />
            </div>
            {addPost.imgRef && addPost.imglink && (
              <button type="submit">Submit</button>
            )}
          </>
        </CustomModal>
      )}
    </>
  );
}

export default Dashboard;
