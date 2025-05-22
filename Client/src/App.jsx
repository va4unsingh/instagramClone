import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inbox, Home } from "./pages";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/inbox" element={<Inbox />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
