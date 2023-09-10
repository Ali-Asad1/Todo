import { createPortal } from "react-dom";

const Portal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const element = document.querySelector("#portal-root");
  return createPortal(children, element as Element);
};

export default Portal;
