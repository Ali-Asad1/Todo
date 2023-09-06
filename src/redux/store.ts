import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todos";

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
