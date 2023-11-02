import React from "react";

const Alert = ({ message, success }) => (
  <div className={`alert alert-${success ? "success" : "error"}`}>
    {message}
  </div>
);

export default Alert;
