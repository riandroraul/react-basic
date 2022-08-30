import React from "react";
import UseContext from "./UseContext";
import { UserProvider } from "./User";

const Home = (props) => {
  return (
    <div>
      <UserProvider>
        <UseContext />
      </UserProvider>
    </div>
  );
};

export default Home;
