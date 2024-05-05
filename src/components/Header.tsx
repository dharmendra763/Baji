import { FiMenu } from "react-icons/fi";
import { GoDesktopDownload } from "react-icons/go";
import { MdOutlineLiveHelp } from "react-icons/md";

function Header() {
  return (
    <div className="h-14">
      <header className="h-14 flex items-center fixed inset-0 bottom-auto">
        <div className="p-2">
          <FiMenu className="text-blue-400" />
        </div>
        <div className="flex items-center justify-between p-2 flex-1">
          <div>
            <img
              src="https://img.b112j.com/bj/h5/assets/images/logo.png?v=1714638394406"
              className="w-[21vw]"
              alt=""
            />
          </div>

          <div className="flex gap-4 text-blue-400">
            <div className="flex flex-col items-center">
              <GoDesktopDownload className="text-xl" />
              <p className="text-xs">App</p>
            </div>
            <div className="flex flex-col items-center">
              <MdOutlineLiveHelp className="text-xl" />
              <p className="text-xs">Help</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
