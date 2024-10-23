import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  benefits: [
    { id: 1, benefit: 'Avoid talking about politics' },
    { id: 2, benefit: 'Avoid talking about religion' },
  ],
  attributes: [
    { id: 1, attribute: '', value: '' },
  ],
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addBenefit: (state, action) => {
      state.benefits.push(action.payload);
    },
    removeBenefit: (state, action) => {
      state.benefits = state.benefits.filter(benefit => benefit.id !== action.payload);
    },
    updateBenefit: (state, action) => {
      const { id, value } = action.payload;
      const index = state.benefits.findIndex(benefit => benefit.id === id);
      if (index !== -1) {
        state.benefits[index].benefit = value;
      }
    },
    addAttribute: (state, action) => {
      state.attributes.push(action.payload);
    },
    removeAttribute: (state, action) => {
      state.attributes = state.attributes.filter(attr => attr.id !== action.payload);
    },
    updateAttribute: (state, action) => {
      const { id, field, value } = action.payload;
      const index = state.attributes.findIndex(attr => attr.id === id);
      if (index !== -1) {
        state.attributes[index][field] = value;
      }
    },
  },
});

export const {
  addItem, removeItem,
  addBenefit, removeBenefit, updateBenefit,
  addAttribute, removeAttribute, updateAttribute
} = itemSlice.actions;

export default itemSlice.reducer;
