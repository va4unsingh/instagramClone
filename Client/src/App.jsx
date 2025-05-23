import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inbox, Home, Profile } from "./pages";
import Layout from "./components/Layout";
import { Posts, Saved, Tagged } from "./components";
import RightDM from "./components/Sections/DMComps/OuterDM/RightDM";
// import InnerDmHeader from "./components/Sections/DMComps/InnerDM/InnerDmHeader";
import InnerDmCombine from "./components/Sections/DMComps/InnerDM/InnerDmCombine";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/inbox" element={<Inbox />}>
            {/* Default route - shows the empty state */}
            <Route index element={<RightDM />} />
            {/* Route for individual messages */}
            <Route path=":id" element={<InnerDmCombine />} />
          </Route>

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
