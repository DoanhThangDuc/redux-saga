import React from "react";
import { Statistic } from "semantic-ui-react";

function DisplayBalance({ size = "small", color, title, value }) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: "left" }}>
        {title}
      </Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}

export default DisplayBalance;
