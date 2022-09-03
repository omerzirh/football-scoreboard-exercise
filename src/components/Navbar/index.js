import React from "react";
import { NavbarContainer, NavbarMain } from "./style.elements";

export default function Index(props) {
  return (
    <>
      <NavbarMain>
        <NavbarContainer>{props.children}</NavbarContainer>
      </NavbarMain>
    </>
  );
}
