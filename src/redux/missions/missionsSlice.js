import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  loading: false,
  error: null,
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions', async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const missions = await response.json();
      return missions;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    handleMission: (state, { payload }) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.id !== payload) return mission;
        return { ...mission, joined: !mission.jouned };
      }),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchMissions.fulfilled, (state, { payload }) => ({
        ...state,
        missions: payload.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          joined: false,
        })),
        loading: false,
      }))
      .addCase(fetchMissions.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  },
});

export const { handleMission } = missionsSlice.actions;

export default missionsSlice.reducer;
