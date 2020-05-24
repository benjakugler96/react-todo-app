import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const ButtonContainer = styled.button`
  background-color: ${({disabled}) => disabled ? colors.neutral03 : colors.blue02};
  border-radius: 4px;
  color: #ffffff;
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
  font-weight: bold;
  padding: 10px;
  transition: all 0.2s; 


  :active {
    background-color: ${colors.blue03};
  }
  :focus,
  :active {
    outline: none;
  }
  `;