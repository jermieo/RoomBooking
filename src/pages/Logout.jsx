import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigation = useNavigate();
  useEffect(() => {
    localStorage.clear("AuthorizationJwt");
    navigation("/");
  }, []);
  return <div></div>;
};

export default Logout;
