import React from "react";
import { Link } from "react-router-dom";

export const Login: React.FC = () => {
  return (
    <>
      <h2>Please Log in</h2>

      <Link to="/login">log in</Link>
    </>
  );
};
