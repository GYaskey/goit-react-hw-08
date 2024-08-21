import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
