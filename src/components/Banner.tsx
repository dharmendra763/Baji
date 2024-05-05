import { TfiAnnouncement } from "react-icons/tfi";
import Marquee from "./Marquee";
import Categories from "./Categories";

function Banner() {
  return (
    <div className="w-full">
      <div className="flex items-center w-full overflow-hidden">
        <div>
          <TfiAnnouncement />
        </div>
        <div className="flex-1 px-4">
          <Marquee />
        </div>
      </div>
      <Categories />
      
    </div>
  );
}

export default Banner;
