import styled from "styled-components";
import { colors } from "../../utils/colors";

export const HeaderContainer = styled.header`
  width: 100vw;
`;

export const HeaderTop = styled.div`
  align-items: center;
  background-color: ${colors.blue02};
  display: flex;
  padding: 4px;

  a {
    color: black;
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
  }

  > * {
    margin-right: 5px;
  }
`;

export const HeaderBottom = styled.div`
  align-items: center;
  background-color: black;
  color: ${colors.neutral01};
  display: flex;
  justify-content: space-around;

  > * {
    flex: 1;
  }

  .logo {
    text-align: center;
  }
`;
