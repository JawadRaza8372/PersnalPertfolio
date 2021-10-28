import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./ContactInfoBox.scss";
function ContactInfoBox({ content, text, href }) {
  return (
    <>
      {href ? (
        <a href={`${href}`} className="infobar">
          <span>
            {content === "email" ? (
              <EmailIcon className="mr-10" />
            ) : content === "phone" ? (
              <WhatsAppIcon className="mr-10" />
            ) : content === "linkdin" ? (
              <LinkedInIcon className="mr-10" />
            ) : content === "insta" ? (
              <InstagramIcon className="mr-10" />
            ) : null}
            {text}
          </span>
        </a>
      ) : (
        <div className="infobar">
          <span>
            {content === "email" ? (
              <EmailIcon className="mr-10" />
            ) : content === "phone" ? (
              <WhatsAppIcon className="mr-10" />
            ) : content === "linkdin" ? (
              <LinkedInIcon className="mr-10" />
            ) : content === "insta" ? (
              <InstagramIcon className="mr-10" />
            ) : null}
            {text}
          </span>
        </div>
      )}
    </>
  );
}

export default ContactInfoBox;
