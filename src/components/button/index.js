import React from 'react';
import { ButtonContainer } from './styles'

const Button = ({ title, onClick, disabled = false }) => (
  <ButtonContainer onClick={onClick} disabled={disabled}>
    {title}
  </ButtonContainer>
);

export default Button;
