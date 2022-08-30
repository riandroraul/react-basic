import React, { useContext } from "react";
import { UserContext } from "./User";

const UseContext = () => {
  const { user, product } = useContext(UserContext);
  return (
    <div>
      <h5>My Name is: {user.nama}</h5>
      <h5>Product: {product}</h5>
    </div>
  );
};

export default UseContext;
