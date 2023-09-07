import { Provider } from "react-redux";
import store from "@/redux/store";

const ReduxProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ReduxProvider;
