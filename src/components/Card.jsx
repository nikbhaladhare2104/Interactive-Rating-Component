import React, { useState } from "react";
import { useData } from "../../ContextProvider";

const Card = () => {
  const [data, setData] = useState(null);
  const [value, setValue] = useData();

  const array = [1, 2, 3, 4, 5];
  return (
    <div className="container">
      <div className="star-img">
        <img src="/icon-star.svg" alt="star Icon" />
      </div>

      <p className="title">How did we do?</p>
      <p className="desc">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-container">
        {array.map((item) => {
          return (
            <div
              key={item}
              className="rating-item"
              style={{
                backgroundColor: item === data ? "var(--White)" : "",
                color: item === data ? "var(--Very-Dark-Blue)" : "",
              }}
              onClick={() => setData(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="btn" onClick={() => setValue(data)}>
        SUBMIT
      </div>
    </div>
  );
};

export default Card;
