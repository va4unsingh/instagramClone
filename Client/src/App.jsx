import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { Inbox, Home, Profile } from "./pages";
import Layout from "./components/Layout";
import { Posts, Saved, Tagged } from "./components";
import RightDM from "./components/Sections/DMComps/OuterDM/RightDM";
// import InnerDmHeader from "./components/Sections/DMComps/InnerDM/InnerDmHeader";
import InnerDmCombine from "./components/Sections/DMComps/InnerDM/InnerDmCombine";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
