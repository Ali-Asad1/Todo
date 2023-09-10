import { getAllTodos } from "@/api/services/todosService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoLoading from "../Loading";
import { AnimatePresence } from "framer-motion";
import Todo from "../Todo";
import Empty from "../Empty";
import Error from "../Error";
import Grid from "@/components/shared/Grid";
import { TodoType } from "@/types/todo.type";

const TodoList = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos() as any);
  }, []);

  return (
    <section>
      <Grid>
        <div className="col-span-full desktop:col-span-8 desktop:col-start-3">
          <div className="w-full min-h-[calc(100vh-240px)] flex flex-col gap-y-5 px-5 py-6 bg-slate-3 rounded-lg border border-slate-6">
            {loading ? (
              <>
                <TodoLoading />
                <TodoLoading />
              </>
            ) : !error ? (
              data.length ? (
                <AnimatePresence mode="popLayout">
                  {data.map((todo: TodoType, index: number) => (
                    <Todo key={todo.id} {...todo} delay={index} />
                  ))}
                </AnimatePresence>
              ) : (
                <Empty />
              )
            ) : (
              <Error />
            )}
          </div>
        </div>
      </Grid>
    </section>
  );
};
export default TodoList;
