import styled from "styled-components";

import { Card } from "../../components/Card";

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width:100%;
  max-width:450px;
`;
export const Wrapper = styled(Card)`
  border-radius: 10px 0 0 10px;
  flex-direction: column;
  width: 100%; !important;
  height: 100px;

  @media only screen and (max-width: 640px) {
    width: 100%; !important;
    height:60px
  }
`;
export const HomeWrapper = styled(Wrapper)`
  background-color: #a86e6e;
  width:100%;
`;

export const TimeWrapper = styled(Wrapper)`
  background-color: #e15050;
  border-radius: 0 !important;
`;

export const AwayWrapper = styled(Wrapper)`
  background-color: #a86e6e;
  border-radius: 0 10px 10px 0 !important;
`;

export const Label = styled.div`
  color: white;

`;
export const TeamLabel = styled(Label)`
  font-size: 24px;
  @media only screen and (max-width: 640px) {
   font-size:16px;
  }
`;
export const ScoreLabel = styled(Label)`
  font-size: 32px;
  @media only screen and (max-width: 640px) {
   font-size:24px;
  }
`;

export const TimeLabel = styled(Label)`
  font-size: 44px;
  @media only screen and (max-width: 640px) {
   font-size:28px;
  }
`;
export const NoMatchLabel = styled(Label)`
  font-size: 24;
  @media only screen and (max-width: 640px) {
   font-size:14px;
  }
`;
