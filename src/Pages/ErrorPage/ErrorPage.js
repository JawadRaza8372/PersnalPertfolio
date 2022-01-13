import React from "react";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="errorPage">
      <h1 className="headinError">404</h1>
      <p>
        The requested url is not available.
        <br />
        Please go back to Homepage.
      </p>
      <Link className="homeLink" to="/">
        Back To Home
      </Link>
    </div>
  );
}

export default ErrorPage;
