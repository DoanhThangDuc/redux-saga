import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

function ModalEdit({ open, description, value, isExpense, id, closeModal }) {
  const entryUpdate = useEntryDetails(description, value, isExpense);

  return (
    <Modal open={open}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Form>
          <EntryForm
            description={entryUpdate.description}
            value={entryUpdate.value}
            isExpense={entryUpdate.isExpense}
            setDescription={entryUpdate.setDescription}
            setValue={entryUpdate.setValue}
            setIsExpense={entryUpdate.setIsExpense}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => closeModal()}>Close</Button>
        <Button primary onClick={() => entryUpdate.updateEntryHandler(id)}>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
