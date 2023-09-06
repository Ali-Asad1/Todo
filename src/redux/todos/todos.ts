import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TodoType } from "../../types/todo.type";
import supabase from "../../config/supabase/supabaseClient";

interface InitialStateType {
  loading: boolean;
  error: {} | null;
  data: TodoType[] | null;
}

const initialState: InitialStateType = {
  loading: true,
  error: null,
  data: null,
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  return await supabase.from("todos").select("*");
});

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTodos.fulfilled, (state, actions) => {
      state.loading = false;
      state.error = null;
      state.data = actions.payload.data;
    }),
      builder.addCase(getTodos.pending, (state, actions) => {
        state.loading = true;
      });
  },
});

export default slice.reducer;
