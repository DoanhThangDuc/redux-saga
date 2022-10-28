import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";
import { removeEntry, editEntry } from "./reduces/entries.reducers";
import { openModal, closeModal } from "./reduces/modal.reducers";
import useEntryDetails from "./hooks/useEntryDetails";

function App() {
  const [burget, setBurget] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [entry, setEntry] = useState();

  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntryHandler,
  } = useEntryDetails();

  // calculate income and expense
  useEffect(() => {
    setExpense((current) => {
      const result = entries.reduce((result, entry) => {
        return entry.isExpense ? result + Number(entry.value) : result;
      }, 0);
      return result;
    });

    setIncome((current) => {
      const result = entries.reduce((result, entry) => {
        return !entry.isExpense ? result + Number(entry.value) : result;
      }, 0);
      return result;
    });
  }, [entries]);

  // calculate total
  useEffect(() => {
    setBurget((current) => {
      return income - expense;
    });
  }, [income, expense]);

  useEffect(() => {
    setEntry(() => {
      return entries.find((entry) => entry.id === id);
    });
  }, [id, isOpen]);

  return (
    <Container>
      <MainHeader title="Burget" />
      <DisplayBalance
        size="small"
        color={burget < 0 ? "red" : "green"}
        value={burget}
      />
      <DisplayBalances size="tiny" expense={expense} income={income} />

      <MainHeader size="h3" title="History" />
      <EntryLines
        entries={entries}
        removeEntry={(id) => dispatch(removeEntry(id))}
        openModal={(id) => dispatch(openModal(id))}
      />
      <MainHeader size="h3" title="Add new transaction" />
      <NewEntryForm
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        addEntry={() => addEntryHandler()}
      />

      <ModalEdit
        open={isOpen}
        {...entry}
        closeModal={() => dispatch(closeModal())}
        editEntry={(entry) =>
          dispatch(editEntry({ id, description, value, isExpense }))
        }
      />
    </Container>
  );
}

export default App;
