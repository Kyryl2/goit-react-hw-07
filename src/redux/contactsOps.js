import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://664a1b5fa300e8795d41018b.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("contacts");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post("contacts", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
