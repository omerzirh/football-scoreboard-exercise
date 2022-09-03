import { Container, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const NavbarMain = styled(Navbar)`
  background-color: #00003C;
  position: sticky;
  top: 0;
  min-width: 280px;
  z-index: 2;
  height: 52px;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center !important;
  width: 100%;
  font-size: 32px;
  color: white;

  @media only screen and (max-width: 640px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 374px) {
    font-size: 16px;
  }
`;
