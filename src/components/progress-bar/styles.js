import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ProgressBarContainer = styled.div`
  height: 5px;
  position: relative;
  background: ${colors.neutral02};
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);

  > span {
    display: ${({ loading }) => (loading ? "block" : "none")};
    height: 100%;
    background-color: ${colors.blue02};
    position: absolute;
    top: 0;
    left: 0;
    animation: expandWidth 5s linear;
    animation-interation-count: 1;
  }

  @keyframes expandWidth {
    0% {
      width: 0;
    }
    10% {
      width: 30%;
    }
    20% {
      width: 100%;
    }
  }
`;
