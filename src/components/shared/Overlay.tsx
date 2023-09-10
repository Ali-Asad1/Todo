import { Variants, motion } from "framer-motion";
import { useEffect } from "react";

const overlayVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const Overlay: React.FC<React.PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-screen h-screen backdrop-blur-md backdrop-saturate-[180%] bg-[#00000050] fixed top-0 left-0 z-20"
    >
      {children}
    </motion.div>
  );
};
export default Overlay;
