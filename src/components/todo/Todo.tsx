import { removeTodo } from "@/redux/todos/todos";
import { TodoType } from "@/types/todo.type";
import { motion, Variants } from "framer-motion";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";

interface TodoPropType extends TodoType {
  delay: number;
}

const Todo = ({ id, created_at, title, description, delay: itemDelay }: TodoPropType) => {
  const todoVariants: Variants = {
    show: {
      opacity: 1,
      transition: {
        delay: itemDelay / 5,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const textVariants: Variants = {
    show: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 5,
    },
  };

  const dispatch = useDispatch();

  return (
    <motion.div
      layout
      variants={todoVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ type: "spring" }}
      className="w-full"
    >
      <div className="group w-full h-full px-5 py-4 bg-slate-1 rounded-lg shadow-lg active:bg-slate-4 transition-colors relative">
        <div className="pr-5 pb-3 mb-3 border-b border-b-slate-6">
          <p className="font-poppins font-semibold text-base desktop:text-lg line-clamp-1">
            {title}
          </p>
        </div>
        <p className="text-sm line-clamp-2">{description}</p>
        <button
          onClick={() => dispatch(removeTodo(id))}
          className="w-10 h-10 flex justify-center items-center bg-teal-8 rounded-lg absolute top-0 -right-2 -translate-y-3 desktop:invisible desktop:opacity-0 desktop:translate-y-0 desktop:group-hover:visible desktop:group-hover:opacity-100 desktop:group-hover:-translate-y-3 active:scale-95 z-10 transition-all cursor-pointer select-none"
        >
          <BiTrash size={24} className="fill-slate-1 pointer-events-none select-none" />
        </button>
      </div>
    </motion.div>
  );
};
export default Todo;
