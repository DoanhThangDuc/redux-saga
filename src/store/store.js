import { configureStore } from "@reduxjs/toolkit";
import entriesSlice from "../reduces/entries.reducers";
import modalSlice from "../reduces/modal.reducers";

const store = configureStore({
  reducer: {
    entries: entriesSlice,
    modal: modalSlice,
  },
});

export default store
