import { createSlice } from "@reduxjs/toolkit";
import values from '../components/App/values.json';

const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" }
  ]
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);

    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;