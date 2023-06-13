import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const contactSlice = createSlice({
  name: 'valueContacts',
  initialState: { contacts: contactsInitialState },

  reducers: {
    setContactValue: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      // підготовча ф-ція
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },

    deletContactsValue: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistContactSlice = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { setContactValue, deletContactsValue } = contactSlice.actions;
