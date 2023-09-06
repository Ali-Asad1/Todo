import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ReduxProvider from "./providers/reduxProvider.tsx";
import "./styles/index.css";
import "./styles/font.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);
