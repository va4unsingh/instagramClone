import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inbox, Home, Profile } from "./pages";
import Layout from "./components/Layout";
import { Posts, Saved, Tagged } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/inbox" element={<Inbox />} />

          <Route path="/profile" element={<Profile />}>
            <Route path="posts" element={<Posts />} />
            <Route path="saved" element={<Saved />} />
            <Route path="tagged" element={<Tagged />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
