import React from "react";

import Header from "./Header";
import SideBarMenu from "./SideBarMenu";
import Main from "./Main";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container-fluid layout">
        <div className="row">
          <SideBarMenu />
          <Main>{children}</Main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
