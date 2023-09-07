import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Update from "./pages/Update/Update";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
