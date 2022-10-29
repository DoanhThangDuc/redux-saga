import React from "react";
import { Form, Segment, Checkbox } from "semantic-ui-react";

function EntryForm({
  description,
  value,
  isExpense,
  setValue,
  setDescription,
  setIsExpense,
}) {
  return (
    <>
      <Form.Group>
        <Form.Input
          placeholder="New shinny thing"
          icon="tags"
          width={12}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
        />
        <Form.Input
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          width={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Value"
        />
      </Form.Group>

      <Segment compact>
        <Checkbox
          toggle
          label="is expense"
          checked={isExpense}
          onClick={() => setIsExpense(!isExpense)}
        />
      </Segment>
    </>
  );
}

export default EntryForm;
