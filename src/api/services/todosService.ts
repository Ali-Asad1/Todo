import supabase from "@/config/supabase/supabaseClient";

export const getAllTodos = async () => {
  try {
    const response = await supabase.from("todos").select("*");
    if (response.status === 200) {
      return response.data;
    } else {
      return { error: response.error, status: response.status };
    }
  } catch (error) {}
};

export const deleteTodo = async (id: number) => {
  const response = await supabase.from("todos").delete().eq("id", id).select();
  try {
    if (response.status === 200) {
      return { status: 200 };
    } else {
      return { error: response.error, status: response.status };
    }
  } catch (err) {}
};

export const addNewTodo = async (data: { title: string; description: string }) => {
  try {
    const response = await supabase.from("todos").insert([{ ...data }]);
    if (response.status === 200) {
      return { status: 200, message: "successfuly added" };
    }
    return { status: response.status, message: response.error?.message };
  } catch (err) {}
};
