import { useRef } from "react";
import { Variants, motion } from "framer-motion";
import Modal from "../Modal";
import { Button } from "@/components/button/Button";
import { BiX } from "react-icons/bi";
import { useClickOutSide } from "@/hooks/useClickOutSide";
import { useKeyPress } from "@/hooks/useKeyPress";

const modalVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const AddtodoModal = ({ onClose }: { onClose: Function }) => {
  const bodyRef = useRef(null);
  useClickOutSide(bodyRef, onClose);
  useKeyPress("Escape", onClose);
  return (
    <Modal>
      <motion.div
        variants={modalVariants}
        ref={bodyRef}
        className="w-full max-w-[680px] flex flex-col px-8 pt-8 pb-14 desktop:px-16 bg-slate-1 rounded-2xl z-30 relative overflow-auto"
      >
        <h2 className="font-poppins font-bold text-2xl text-center">Add new todo</h2>
        <div className="flex flex-col mt-10">
          <label htmlFor="title" className="font-poppins text-base pl-1">
            title
          </label>
          <input
            type="text"
            placeholder="Enter title ..."
            name="title"
            id="title"
            className="w-full h-10 mt-2 px-3 bg-slate-4 rounded-md border border-slate-6 text-sm focus:border-teal-8 focus:outline-none transition-colors placeholder:font-roboto placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col mt-10">
          <label htmlFor="description" className="font-poppins text-base pl-1">
            description
          </label>
          <textarea
            placeholder="Enter title ..."
            name="description"
            id="description"
            className="w-full h-24 mt-2 px-3 pt-3 bg-slate-4 rounded-md border border-slate-6 text-sm focus:border-teal-8 focus:outline-none transition-colors placeholder:font-roboto placeholder:text-sm resize-none"
          />
        </div>
        <Button className="mt-6">Add</Button>
        <Button
          btnType="iconOnly"
          btnStyle="outline"
          className="absolute top-4 left-4"
          onClick={() => {
            onClose();
          }}
        >
          <BiX size={24} />
        </Button>
      </motion.div>
    </Modal>
  );
};
export default AddtodoModal;
