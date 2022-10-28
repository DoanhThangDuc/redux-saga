import { createSlice } from "@reduxjs/toolkit";

const initialModal = {
  isOpen: false,
  id: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModal,
  reducers: {
    openModal: (state, action) => {
      return { ...state, isOpen: true, id: action.payload };
    },
    closeModal: (state, action) => {
      return { ...state, isOpen: false, id: action.payload };
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;  
export default modalSlice.reducer;
