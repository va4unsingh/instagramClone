import "./App.css";
import { LeftSide, RightSide } from "./components";

function App() {
  return (
    <div className="flex min-h-screen bg-black text-white gap-2 ">
      {/* Left side - 20% */}
      <div className="w-[16%] border-r-1 border-white/15 p-2 pl-6 ">
        <LeftSide />
      </div>

      {/* Center - 60% */}
      <div className="w-[58%]  border-r-1 border-white/15 p-2">
        Center Content
      </div>

      {/* Right side - 20% */}
      <div className="w-[26%] p-2">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
