import React from "react";
import "./Body.scss";

function Body ({children}) {
  return <div className="body">
    {children}
  </div>;
};

export default Body;
