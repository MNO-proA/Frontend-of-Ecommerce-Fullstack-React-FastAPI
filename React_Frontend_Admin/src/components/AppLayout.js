import React from "react";
import AppHeader from "./AppHeader";

const AppLayout = (props) => {
  return (
    <>
      <AppHeader />
      {props.children}
    </>
  );
};

export default AppLayout;
