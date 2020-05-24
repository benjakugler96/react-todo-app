import React from "react";
import { ViewHeaderContainer } from "./styles";

const ViewHeader = ({ title, count }) => (
  <ViewHeaderContainer>{title} {count ? `- ${count}` : ''}</ViewHeaderContainer>
);

export default ViewHeader;
