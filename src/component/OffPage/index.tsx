import React from "react";
import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";
import { Mycourse } from "./MyCourse/Mycourse";
export const User = () => {
  const userID = localStorage.getItem("userID");
  return (
    <div>
      {userID ? (
        <Mycourse />
      ) : (
        <>
          <Login />
          <SignUp />
        </>
      )}
    </div>
  );
};
