import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Worker {
  first_name: string;
  last_name: string;
  favorite: {
    color: string;
    food: string;
    random_string: string;
    song: string;
  };
  gender: string;
  image: string;
  profession: string;
  email: string;
  age: number;
  country: string;
  height: number;
  id: number;
}
export const fetchWorkers = createAsyncThunk<
  any[],
  number,
  { rejectValue: string }
>("worker/fetchWorkers", async (page, thunkAPI) => {
  try {
    const response = await fetch(
      `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${page}`
    );
    const data = await response.json();
    const workers = data.results;
    return workers;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch workers data.");
  }
});
interface WorkersState {
  workers: Worker[];
  loading: boolean;
  error: string | null;
}
const initialState: WorkersState = {
  workers: [],
  loading: false,
  error: null,
};
export const workersSlice = createSlice({
  name: "workers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkers.fulfilled, (state, action) => {
        state.loading = false;
        const workers = [...state.workers, ...action.payload];
        // this is to avoid first double useEffect on first load with strict mode
        const uniqueWorkers = workers.reduce((accumulator, current) => {
          if (
            !accumulator.find((item: { id: number }) => item.id === current.id)
          ) {
            accumulator.push(current);
          }
          return accumulator;
        }, []);
        state.workers = uniqueWorkers;
      })
      .addCase(fetchWorkers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});
export default workersSlice.reducer;
