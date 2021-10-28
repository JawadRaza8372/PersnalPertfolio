import Routes from "./Navigation/Routes";
import { useEffect } from "react";
// import { auth, db } from "./database/FirebaseConfig";
import { ToastContainer, toast } from "react-toastify";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { setAuth } from "./store/authSlice";
import { setProjects } from "./store/projectSlice";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./database/FirebaseConfig";
function App() {
  const getauth = getAuth();

  const dispatch = useDispatch();
  const checkuser = async () => {
    onAuthStateChanged(getauth, (user) => {
      console.log("started");
      const data = user ? user.uid : null;
      dispatch(setAuth({ auth: data }));
    });
  };
  const fetchProjects = async () => {
    const projects = await getData();
    dispatch(setProjects({ projects }));
  };

  useEffect(() => {
    checkuser();
  }, []);
  useEffect(() => {
    toast.success("Welcome To My Portfolio 😃.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <>
      <Routes />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
