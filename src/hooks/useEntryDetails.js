import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addEntry, editEntry } from "../reduces/entries.reducers";
import { closeModal } from "../reduces/modal.reducers";

function useEntryDetails(descript = "", val = "", isExpen = true) {
  const [description, setDescription] = useState(descript);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExpen);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(descript);
    setValue(val);
    setIsExpense(isExpen);
  }, [descript, val, isExpen]);

  const addEntryHandler = () => {
    dispatch(addEntry({ description, value, isExpense }));
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  const updateEntryHandler = (id) => {
    const updatedEntry = {
      id: id,
      description: description,
      value: value,
      isExpense: isExpense,
    };
    dispatch(editEntry(updatedEntry));
    dispatch(closeModal());
  };
  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntryHandler,
    updateEntryHandler,
  };
}

export default useEntryDetails;
