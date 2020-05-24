import styled from 'styled-components';

export const SearchContainer = styled.div`

  display: flex;

  input {
    border: none;
    border-radius: 2px 0 0 2px;
    padding: 8px;
    width: 70%;
  }

  button {
    padding: 8px;
    border-radius: 0 2px 2px 0;
    cursor: pointer;

    :active,
    :hover {
      svg {
        fill: black;
      }
    }
  }
`;