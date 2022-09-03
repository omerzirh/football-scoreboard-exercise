import styled from "styled-components";
import { Chips } from "../../components/Chips";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TabsWrapper = styled(Wrapper)`
  column-gap: 10px;
`;
export const Tab = styled(Chips)`
  width: 80px;
  background: ${(props) => props.background};
`;
