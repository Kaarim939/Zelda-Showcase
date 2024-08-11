import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./routes/ErrorPage";
import { HomePage } from "./routes/HomePage";
import "leaflet/dist/leaflet.css";
import "./App.css";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};
