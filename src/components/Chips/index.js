import styled from "styled-components";

export const Chips = styled.button`
  background: #ff0000;
  color: white;
  display: inline-block;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #00003c;
  transition: ease-out 0.3s;
  width: 100%;
  border-radius: 8px;
  border: 1px solid black;

  &:hover {
    transition: ease-in 0.8s;
    box-shadow: inset 400px 0 0 0 #00003c;
    color: #ff0000;
  }

  &:focus {
    outline: "1px solid #6B38FB";
  }
`;
