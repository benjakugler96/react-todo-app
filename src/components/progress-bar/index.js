import React from "react";
import { ProgressBarContainer } from "./styles";

const ProgressBar = ({ loading }) => (
  <ProgressBarContainer loading={loading}>
    <span />
  </ProgressBarContainer>
);

export default ProgressBar;
