import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showFile: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.showFile = true;
      document.body.style.overflowY = "hidden";
    },
    closeModal: (state) => {
      state.showFile = false;
      document.body.style.overflowY = "auto";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
