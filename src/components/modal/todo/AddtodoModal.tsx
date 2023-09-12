import { useRef } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Variants, motion } from "framer-motion";
import { useClickOutSide } from "@/hooks/useClickOutSide";
import { useKeyPress } from "@/hooks/useKeyPress";
import Modal from "../Modal";
import TextField from "@/components/form/TextField";
import { Button } from "@/components/button/Button";
import { BiX } from "react-icons/bi";
import TextareaField from "@/components/form/TextareaField";
import Spinner from "@/components/loaders/Spinner";
import { addNewTodo } from "@/api/services/todosService";

interface Values {
  title: string;
  description: string;
}

const initialValues: Values = {
  title: "",
  description: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

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

const AddtodoModal = ({
  onClose,
  relodMainData,
}: {
  onClose: VoidFunction;
  relodMainData: VoidFunction;
}) => {
  const bodyRef = useRef(null);
  useClickOutSide(bodyRef, onClose);
  useKeyPress("Escape", onClose);

  const submitAddNewTodo = async (values: Values, actions: FormikHelpers<Values>) => {
    await addNewTodo(values);
    actions.resetForm();
    relodMainData();
    onClose();
  };
  return (
    <Modal>
      <motion.div
        variants={modalVariants}
        ref={bodyRef}
        className="w-full max-w-[680px] flex flex-col px-8 pt-8 pb-14 desktop:px-16 bg-slate-1 rounded-2xl z-30 relative overflow-auto"
      >
        <h2 className="font-poppins font-bold text-2xl text-center">Add new todo</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={submitAddNewTodo}
          validationSchema={validationSchema}
        >
          {({ isValid, isSubmitting }) => (
            <Form>
              <TextField lable="Title" type="text" name="title" placeholder="Enter title" />
              <TextareaField
                lable="Description"
                name="description"
                placeholder="Enter description"
              />
              <Button type="submit" className="mt-6" disabled={!isValid || isSubmitting}>
                {isSubmitting ? <Spinner size="md" /> : "Add"}
              </Button>
            </Form>
          )}
        </Formik>
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
