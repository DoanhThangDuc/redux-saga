import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntryLines({
  entries,
  removeEntry,
  openModal,
  isOpenEdit,
  setEntryId,
  editEntry,
}) {
  return (
    <Container>
      {entries.map((entry) => {
        return (
          <EntryLine
            {...entry}
            key={entry.id}
            removeEntry={removeEntry}
            isOpenEdit={isOpenEdit}
            openModal={openModal}
            setEntryId={setEntryId}
            editEntry={editEntry}
          />
        );
      })}
    </Container>
  );
}

export default EntryLines;
