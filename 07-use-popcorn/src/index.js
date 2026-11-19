import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating/StarRating";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5}></StarRating>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      size={25}
      defaultRating={3}
    ></StarRating>
    <Test></Test> */}
  </React.StrictMode>,
);

function Test() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <StarRating maxRating={10} onSetRating={(x) => setRating(x)}></StarRating>
      <p>This movie was rated {rating} stars</p>
    </div>
  );
}
