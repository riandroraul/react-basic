import React from "react";
import ChildComp from "./ChildComp";

const Comp = (props) => {
  return (
    <div>
      {/* <h1>{props.state}</h1> */}
      <ChildComp state={props.state} />
    </div>
  );
};

export default Comp;
