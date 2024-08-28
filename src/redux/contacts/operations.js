import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error('Something went wrong', { duration: 3000 });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', body);
      toast.success('Contact successfully added!');
      return response.data;
    } catch (error) {
      toast.error('Something went wrong', { duration: 3000 });

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      toast.success('Contact successfully deleted!');
      return id;
    } catch (error) {
      toast.error('Something went wrong', { duration: 3000 });

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
