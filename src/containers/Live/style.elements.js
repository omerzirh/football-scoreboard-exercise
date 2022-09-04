import styled from "styled-components";

import { Card } from "../../components/Card";

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const Wrapper = styled(Card)`
  border-radius: 10px 0 0 10px;
  flex-direction: column;
  width: 150px !important;
  height: 100px;
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
`;
export const ScoreLabel = styled(Label)`
  font-size: 32px;
`;

export const TimeLabel = styled(Label)`
  font-size: 44px;
`;
export const NoMatchLabel = styled(Label)`
  font-size: 24;
`;
