import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialEntries = [
  {
    id: 1,
    description: "Income redux",
    value: 2000,
    isExpense: false,
  },
  {
    id: 2,
    description: "eating",
    value: 300,
    isExpense: true,
  },
  {
    id: 3,
    description: "power bill",
    value: 500,
    isExpense: true,
  },
  {
    id: 4,
    description: "school",
    value: 1000,
    isExpense: true,
  },
];

const entriesSlice = createSlice({
  name: "entries",
  initialState: initialEntries,
  reducers: {
    addEntry: {
      reducer: (state, action) => {
        return [
          ...state,
          {
            ...action.payload,
          },
        ];
      },
      prepare: ({ description, value, isExpense }) => {
        return {
          payload: {
            id: uuidv4(),
            description,
            value,
            isExpense,
          },
        };
      },
    },

    removeEntry: (state, action) => {
      return state.filter((entry) => entry.id !== action.payload);
    },
    
    editEntry: (state, action) => {
      return state.map((entry) => {
        if (entry.id === action.payload.id) {
          return {  ...action.payload };
        }
        return entry;
      });
    },
  },
});

export const { addEntry, removeEntry, editEntry } = entriesSlice.actions;
export default entriesSlice.reducer;
