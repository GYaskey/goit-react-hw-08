import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/contactSelectors';

export const selectFilter = state => state.filter.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
