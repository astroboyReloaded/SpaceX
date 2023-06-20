import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {},
});

export default missionsSlice.reducer;
