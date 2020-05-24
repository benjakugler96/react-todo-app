import styled from 'styled-components';
import {colors} from '../../utils/colors'

export const StyledMenu = styled.ul`
display: flex;
list-style: none;

li {
  a {
    color: ${colors.neutral01};
    cursor: pointer;
    display: block;
    padding: 15px;
    text-decoration: none;
  }
}
`