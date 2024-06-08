import React from "react";
import { useData } from "../../ContextProvider";

const Thanks = () => {
  const [value] = useData();
  return (
    <div className="container thanks">
      <img
        src="/illustration-thank-you.svg"
        alt="Thank you Icon"
        className="thank-img"
      />
      <div className="selected-rating">You selected {value} out of 5</div>
      <h1 style={{ fontSize: "1.7rem", marginBottom: "0.5rem" }}>Thank you!</h1>
      <p className="desc thanks-desc">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thanks;
