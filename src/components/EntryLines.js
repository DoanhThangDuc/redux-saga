import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntryLines({ entries, openModal, removeEntry }) {
  return (
    <Container>
      {entries.map((entry) => {
        return (
          <EntryLine
            {...entry}
            key={entry.id}
            id={entry.id}
            description={entry.description}
            value={entry.value}
            isExpense={entry.isExpense}
            openModal={openModal}
            removeEntry={removeEntry}
          />
        );
      })}
    </Container>
  );
}

export default EntryLines;
