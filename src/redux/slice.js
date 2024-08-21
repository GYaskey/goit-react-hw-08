import { createSlice } from '@reduxjs/toolkit';
import contactList from '../assets/contacts.json';

const initialState = {
  contacts: contactList,
  search: '',
};

// [
//     {
//         id: 'id-1',
//         name: 'Rosie Simpson',
//         number: '459-12-56',
//     },
// ];

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
});

export const contactsReducer = slice.reducer;
export const {} = slice.actions;
