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
`;

export const TimeWrapper = styled(Wrapper)`
  background-color: #e15050;
  border-radius: 0 !important;
`;

export const AwayWrapper = styled(Wrapper)`
  background-color: #a86e6e;
  border-radius: 0 10px 10px 0 !important;
`;

export const TeamLabel = styled.div`
  font-size: 24px;
  color: white;
`;

export const ScoreLabel = styled.div`
  font-size: 32px;
  color: white;
`;

export const TimeLabel = styled.div`
  font-size: 44px;
  color: white;
`;
