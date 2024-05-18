import React from "react";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  return (
    <div
      style={{
        backgroundColor: "darkgrey",
        height: "91vh",
        paddingTop: "90px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Signup</h1>
      <AuthForm type="signup" />
    </div>
  );
};

export default Signup;
