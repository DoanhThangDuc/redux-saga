import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

function ModalEdit({ open, description, value, isExpense, id, closeModal, editEntry }) {
  const updateEntry = useEntryDetails(
    description,
    value,
    isExpense
  );

  return (
    <Modal open={open}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Form>
          <EntryForm
            description={updateEntry.description}
            setDescription={updateEntry.setDescription}
            value={updateEntry.value}
            setValue={updateEntry.setValue}
            isExpense={updateEntry.isExpense}
            setIsExpense={updateEntry.setIsExpense}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => closeModal()}>Close</Button>
        <Button
          primary
          onClick={() => updateEntry.updateEntryHandler(id)}
        >
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
