/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    updateState: (state, action) => action.payload,

    addUrl: (state, action) => {
      // console.log('add action.payload = ', action.payload);

      const {
        id, url, shortURL, edit
      } = action.payload;

      state.push({
        id, url, shortURL, edit
      });
    },

    deleteUrl: (state, action) => {
      const targetID = action.payload;

      const newState = state.filter((singleObject) => {
        if (singleObject.id !== targetID) {
          return true;
        }
        return false;
      });

      localStorage.setItem('urlsList', JSON.stringify(newState));
      return newState;
    },

    editUrl: (state, action) => {
      const targetID = action.payload;
      const newState = state.map((singleObject) => {
        if (singleObject.id === targetID) {
          return { ...singleObject, edit: true };
        }

        return { ...singleObject, edit: false };
      });

      localStorage.setItem('urlsList', JSON.stringify(newState));
      return newState;
    },

    updateUrl: (state, action) => {
      const { id: targetID, url } = action.payload;

      const newState = state.map((singleObject) => {
        if (singleObject.id === targetID) {
          return {
            ...singleObject, url, edit: false
          };
        }
        return singleObject;
      });

      localStorage.setItem('urlsList', JSON.stringify(newState));
      return newState;
    }
  }
});

export default urlSlice.reducer;
export const {
  addUrl, deleteUrl, editUrl, updateUrl, updateState
} = urlSlice.actions;
