import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bubbles from "./components/Bubbles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bubbles />} />
      </Routes>
    </Router>
  );
}

export default App;
