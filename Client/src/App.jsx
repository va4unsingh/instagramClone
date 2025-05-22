import "./App.css";
import { LeftSide, Middle, RightSide } from "./components";

function App() {
  return (
    <div className="flex min-h-screen bg-black text-white gap-2">
      {/* Left side - 20% */}
      <div className="xl:w-[16%] xl:border-r-1 xl:border-white/15 hidden xl:block">
        <LeftSide />
      </div>

      {/* Center - 60% */}
      <div className="w-full xl:w-[54%]  xl:border-r-1 xl:border-white/15 xl:p-4">
        <Middle />
      </div>

      {/* Right side - 20% */}
      <div className="xl:w-[30%] xl:p-2 hidden xl:block">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
