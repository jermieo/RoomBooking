import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { create, login } from "../Apis/Api";

const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    type: type,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData, "formData");
    if (formData.type == "signup") {
      axios
        .post(create, formData)
        .then((response) => {
          toast(response.data.message);
          navigate("/login");
        })
        .catch((error) => {
          console.error("Authentication error:", error.response.data);
        });
    } else {
      axios
        .post(login, formData)
        .then((response) => {
          toast(response.data.message);
          localStorage.setItem("AuthorizationJwt", response.data.token);
          navigate("/");
        })
        .catch((error) => {
          console.error("Authentication error:", error.response.data);
        });
    }
  };

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">{type === "login" ? "Login" : "Signup"}</button>
      </form>
    </div>
  );
};

export default AuthForm;
