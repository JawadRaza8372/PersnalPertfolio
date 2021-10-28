import React from "react";
import { useHistory } from "react-router";
import "./Card.scss";

function CustomCard({ data }) {
  const location = useHistory();
  return (
    <div className="card" onClick={() => location.push(`/project/${data.id}`)}>
      <img
        src={
          data?.data?.imge
            ? `${data?.data?.imge}`
            : "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
        }
        alt="jh"
      />
      <div>
        <h1>{data?.data?.title}</h1>
      </div>
    </div>
  );
}

export default CustomCard;
