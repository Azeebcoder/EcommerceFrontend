import React from "react";
import Header from "../../components/shared/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div>Footer</div>
    </>
  );
};

export default Layout;
