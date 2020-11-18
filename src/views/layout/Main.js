import React from "react";

const Main = ({ children }) => {
  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        {children}
      </div>
    </main>
  );
};

export default Main;
