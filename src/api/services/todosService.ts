import supabase from "@/config/supabase/supabaseClient";

export const getAllTodos = async () => {
  return await supabase.from("todos").select("*");
};

export const deleteTodo = async (id: number) => {
  return await supabase.from("todos").delete().eq("id", id).select();
};
