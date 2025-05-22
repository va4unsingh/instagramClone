import { LeftSide, Middle, RightSide } from "../../components";

function Home() {
  return (
    <div className="flex">
      {/* Left side - 20% */}
    

      {/* Center - 60% */}
      <div className="w-full xl:w-[66%]  xl:p-4">
        <Middle />
      </div>
       {/* xl:border-r-1 xl:border-white/15 */}

      {/* Right side - 20% */}
      <div className="xl:w-[34%] xl:p-2 hidden xl:block">
        <RightSide />
      </div>
    </div>
  );
}

export default Home;
