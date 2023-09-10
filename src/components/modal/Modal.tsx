import Overlay from "../shared/Overlay";
import Portal from "../shared/Portal";

const Modal = ({ children }: React.PropsWithChildren) => {
  return (
    <Portal>
      <Overlay>
        <div className="w-full h-full flex justify-center items-center px-5">{children}</div>
      </Overlay>
    </Portal>
  );
};
export default Modal;
