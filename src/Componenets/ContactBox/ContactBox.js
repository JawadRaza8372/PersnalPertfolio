import React, { useState } from "react";
import "./ContactBox.scss";
import ContactInfoBox from "../ContactInfoBox/ContactInfoBox";
import { postMsg } from "../../database/FirebaseConfig";
import { toast } from "react-toastify";
function ContactBox() {
  const [contactData, setcontactData] = useState({
    clientName: "",
    clientEmail: "",
    clientMsg: "",
  });
  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setcontactData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const submitfunc = async (e) => {
    e.preventDefault();
    const resp = await postMsg(contactData);
    resp?.data && !resp?.error
      ? toast.success("Message Sent", {
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
    setcontactData({ clientName: "", clientEmail: "", clientMsg: "" });
  };
  return (
    <>
      <form className="ownFlex" onSubmit={submitfunc}>
        <h1>Let's Connect</h1>
        <input
          placeholder="Your Name"
          className="customInput"
          type="text"
          autoComplete="off"
          minLength={5}
          onChange={handleChange}
          id="clientName"
          value={contactData.clientName}
        />
        <input
          placeholder="Your Email"
          className="customInput"
          type="email"
          value={contactData.clientEmail}
          autoComplete="off"
          onChange={handleChange}
          id="clientEmail"
        />
        <textarea
          placeholder="Your Message"
          type="text"
          className="customInputarea"
          value={contactData.clientMsg}
          minLength={15}
          onChange={handleChange}
          id="clientMsg"
          autoComplete="off"
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      <div className="ownFlex">
        <ContactInfoBox content="email" text="jawadraza8372@gmail.com" />
        <ContactInfoBox content="phone" text="+923098372940" />
        <ContactInfoBox
          content="linkdin"
          text="Muhammad Jawad Raza"
          href="https://www.linkedin.com/in/muhammad-jawad-raza-119a23203/"
        />
        <ContactInfoBox
          content="insta"
          text="Muhammad_jawadraza_dev"
          href="https://www.instagram.com/muhammad_jawadraza_dev/"
        />
      </div>
    </>
  );
}

export default ContactBox;
