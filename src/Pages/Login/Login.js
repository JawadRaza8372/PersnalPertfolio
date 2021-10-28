import React, { useState } from "react";
import { login } from "../../database/FirebaseConfig";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "./Login.scss";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const submitFun = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      console.log("all fields required");
    }
    const { uid, error } = await login(email, password);
    if (uid) {
      dispatch(setAuth({ auth: uid }));
      toast.success("Login Successfull!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (!uid && error) {
      const newerror = error.replace("auth/", "");
      const check = newerror.replace(/-/g, " ");
      const newcheck = check.charAt(0).toUpperCase() + check.slice(1);
      toast.error(`${newcheck}`, {
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
      <div className="sectionLogin">
        <form onSubmit={submitFun}>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      {/* <ToastContainer
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
      /> */}
    </>
  );
}

export default Login;
