import supabase from "@/config/supabase/supabaseClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTodos = createAsyncThunk("todos/getAllTodos", async () => {
  const response = await supabase.from("todos").select("*");
  if (response.data) {
    return response;
  } else if (response.error) {
    throw response.status;
  }
});
