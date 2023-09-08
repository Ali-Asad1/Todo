import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@/components/shared/Grid";
import Todo from "@/components/todo/Todo";
import TodoLoading from "@/components/todo/Loading";
import { TodoType } from "@/types/todo.type";
import { getAllTodos } from "@/api/services/todosService";
import Empty from "@/components/todo/Empty";
import Error from "@/components/todo/Error";

export default function Home() {
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
                <AnimatePresence mode="sync">
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
}
