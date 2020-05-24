import styled from "styled-components";
import { colors } from "../../utils/colors";

export const FormContainer = styled.form`
  background-color: white;
  border-radius: 4px;
  min-width: 300px;
  z-index: 100;

  .content {
    display: flex;
    flex-direction: column;
    padding: 10px 20px 0 20px;
  }

  .header {
    align-items: center;
    display: flex;
    flex-direction: row;
    font-size: 1.3rem;
    justify-content: space-between;

  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    input {
      border-radius: 4px;
      border: 1px solid ${colors.neutral01};
      height: 20px;
      padding 3px 0;
      width: 100%;
    }
  }
`;
