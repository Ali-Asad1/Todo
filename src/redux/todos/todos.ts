import { createSlice } from "@reduxjs/toolkit";
import { TodoType } from "@/types/todo.type";
import { getAllTodos } from "@/api/services/todosService";

interface InitialStateType {
  loading: boolean;
  error?: {} | null;
  data?: TodoType[] | null;
}

const initialState: InitialStateType = {
  loading: true,
  error: null,
  data: [],
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    removeTodo: (state, actions) => {
      state.data = state.data?.filter((item) => item.id !== actions.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllTodos.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getAllTodos.fulfilled, (state, actions: any) => {
        state.loading = false;
        state.error = null;
        state.data = actions.payload.data;
      }),
      builder.addCase(getAllTodos.rejected, (state, actions: any) => {
        state.loading = false;
        state.error = actions.error.message;
      });
  },
});

export const { removeTodo } = slice.actions;
export default slice.reducer;
