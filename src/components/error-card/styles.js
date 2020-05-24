import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ErrorCardContainer = styled.div`
  background-color: ${colors.red01};
  border-radius: 4px;
  border: 1px solid ${colors.red03};
  color: ${colors.neutral00};
  font-size: 12px;
  line-height: 100%;
  margin-top: 10px;
  padding: 5px;
`;
