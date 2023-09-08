import { motion, Variants } from "framer-motion";

const todoVariants: Variants = {
  show: {
    opacity: 1,
    transition: {
      type: "spring",
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
const Loading = () => {
  return (
    <motion.div
      variants={todoVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="w-full"
    >
      <div className="w-full px-5 py-4 bg-slate-1 rounded-lg shadow-lg">
        <motion.div
          variants={textVariants}
          className="w-full h-4 bg-slate-7 rounded-md mb-4 animate-pulse"
        ></motion.div>
        <motion.div
          variants={textVariants}
          className="w-full h-2 bg-slate-7 rounded-md mb-2 animate-pulse"
        ></motion.div>
        <motion.div
          variants={textVariants}
          className="w-1/2 h-2 bg-slate-7 rounded-md animate-pulse"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;
