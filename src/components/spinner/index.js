import React from 'react';
import { ClipLoader } from 'react-spinners';
import { SpinnerContainer } from './styles';

const Spinner = () => (
  <SpinnerContainer>
    <ClipLoader />
  </SpinnerContainer>
);

export default Spinner;
