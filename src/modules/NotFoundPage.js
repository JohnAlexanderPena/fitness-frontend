import React from "react";
import { A } from "hookrouter";
const PageNotFound = (props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <h4 style={{ marginLeft: "50%" }}>
        Sorry, the page you are looking for does not exist, please click the
        back button
      </h4>
      <A style={{ marginLeft: "50%", fontSize: "30px" }} href="/profile">
        Go Back
      </A>
    </div>
  );
};

export default PageNotFound;
