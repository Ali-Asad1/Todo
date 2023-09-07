import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Provider from "./providers/redux/Provider.tsx";
import "./styles/index.css";
import "./styles/font.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <Provider>
    <App />
  </Provider>
);
