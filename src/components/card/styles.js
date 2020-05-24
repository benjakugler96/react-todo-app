import styled from "styled-components";
import { colors } from "../../utils/colors";

export const CardContainer = styled.div`
  border-radius: 4px;
  border-top: 5px solid ${colors.blue02};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  width: 70%;
  margin 20px 0;


  transform: ${({animateRemove}) => animateRemove ? 'translateX(200%)' : 'translateX(0)'};
  transition: all 0.8s ease;
`;

export const CardHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 5px 25px;
  text-transform: uppercase;

  .icons-container svg {
    padding-left: 10px;
    cursor: pointer;
    ${({ isFav }) =>
      isFav
        ? `
      :nth-child(3) {
        fill: #f6dd52;
      }
      `
        : ""}
  }
`;

export const CardBody = styled.div`
  margin: 10px 0;
`;

export const CardRow = styled.div`
  align-items: center;
  background-color: ${({ grayRow }) => grayRow ? colors.neutral02 : '#fff' };
  display: flex;
  padding: 5px 25px;

  span {
    margin-right: 15px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  padding: 0 25px 5px 0;

  div {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 5px;
    
    input {
      margin-right: 5px;
    }
  }

`;