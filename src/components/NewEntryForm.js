import React from "react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import { Form } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function NewEntryForm({
  description,
  value,
  isExpense,
  setValue,
  setDescription,
  setIsExpense,
  addEntry
}) {
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel
        description={description}
        value={value}
        isExpense={isExpense}
        addEntry={addEntry}
      />
    </Form>
  );
}

export default NewEntryForm;
