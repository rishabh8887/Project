import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="card container">
        <div className="card-body"></div>
        {children}
      </div>
    </>
  );
};

export default Container;
