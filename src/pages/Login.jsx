import React from "react";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <div
      style={{
        backgroundColor: "darkgrey",
        height: "91vh",
        paddingTop: "90px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <AuthForm type="login" />
    </div>
  );
};

export default Login;
