import { TodoType } from "@/types/todo.type";
import { motion } from "framer-motion";
import { BiTrash } from "react-icons/bi";

interface TodoPropType extends TodoType {
  delay: number;
  onRemove: Function;
}

const Todo = ({ id, title, description, delay: itemDelay, onRemove }: TodoPropType) => {
  return (
    <motion.div
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, transition: { ease: "easeInOut", delay: itemDelay / 10 } }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      key={id}
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
          onClick={() => {
            onRemove(id);
          }}
          className="w-10 h-10 flex justify-center items-center bg-teal-8 rounded-lg absolute top-0 -right-2 -translate-y-3 desktop:invisible desktop:opacity-0 desktop:translate-y-0 desktop:group-hover:visible desktop:group-hover:opacity-100 desktop:group-hover:-translate-y-3 active:scale-95 z-10 transition-all cursor-pointer select-none"
        >
          <BiTrash size={24} className="fill-slate-1 pointer-events-none select-none" />
        </button>
      </div>
    </motion.div>
  );
};
export default Todo;
