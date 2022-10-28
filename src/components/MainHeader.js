import React from "react";
import { Header } from "semantic-ui-react";

function MainHeader({size = 'h1', title}) {
  return <Header as={size}>{title}</Header>;
}

export default MainHeader;
