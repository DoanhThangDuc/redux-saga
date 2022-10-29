import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";
import useEntryDetails from "./hooks/useEntryDetails";
import { closeModal, openModal } from "./reduces/modal.reducers";
import { removeEntry } from "./reduces/entries.reducers";
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
    value,
    isExpense,
    setValue,
    setDescription,
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

  // editEntry
  useEffect(() => {
    setEntry(() => {
      return entries.find((entry) => entry.id === id);
    });
  }, [isOpen, id, entries]);

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
        openModal={(id) => dispatch(openModal(id))}
        removeEntry={(id) => dispatch(removeEntry(id))}
      />

      <MainHeader size="h3" title="Add new transaction" />
      <NewEntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
        addEntry={() => addEntryHandler()}
      />

      <ModalEdit
        open={isOpen}
        {...entry}
        closeModal={() => dispatch(closeModal())}
      />
    </Container>
  );
}

export default App;
