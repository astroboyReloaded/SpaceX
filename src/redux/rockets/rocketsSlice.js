import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/rockets');
      const rockets = response.json();
      return rockets;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    handleRocket: (state, { payload }) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id !== payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      }),
    }),
    // cancelRocket: (state, { payload }) => ({
    //   ...state,
    //   rockets: state.rockets.map((rocket) => {
    //     if (rocket.id !== payload) return rocket;
    //     return { ...rocket, reserved: false };
    //   }),
    // }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchRockets.fulfilled, (state, { payload }) => ({
        ...state,
        rockets: payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          img: rocket.flickr_images[0],
          reserved: false,
        })),
        loading: false,
      }))
      .addCase(fetchRockets.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  },
});

export const { handleRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
