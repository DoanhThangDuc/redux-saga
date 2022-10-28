import React from "react";
import DisplayBalance from "./DisplayBalance";
import { Segment, Grid } from "semantic-ui-react";

function DisplayBalances({expense, income}) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              title="Income: "
              value={income}
              color="green"
              size="tiny"
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              title="Expenses: "
              value={expense}
              color="red"
              size="tiny"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
