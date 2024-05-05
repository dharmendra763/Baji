import { useState } from "react";
import { MdOutlineSportsHandball, MdOutlineSportsTennis } from "react-icons/md";
import CardHeader from "./atoms/CardHeader";

function Categories() {
  const [categories, setCategories] = useState([
    { text: "Sports" },
    { text: "Casino" },
    { text: "Slots" },
    { text: "Table" },
    { text: "Crash" },
    { text: "Fishing" },
    { text: "Sports" },
    { text: "Arcade" },
    { text: "Lottery" },
  ]);

  const activeClass = `bg-[#2b2b2b]`;

  const [activeCategory, setActiveCategory] = useState(0);

  const [sportsCategory] = useState([
    "Exchange",
    "I-Sports",
    "SBO Sports",
    "E!SPORT",
    "HORSEBOOK",
    "Virtual",
    "Kabaddi",
  ]);
  return (
    <>
      <div className="flex flex-nowrap overflow-auto pt-2">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`flex relative flex-col gap-2 items-center px-3 py-3 ${
              activeCategory === index ? activeClass : ""
            } 
         `}
          >
            <div className="rounded-full p-2 bg-[#4A4A4A]">
              <MdOutlineSportsTennis className="text-4xl" />
            </div>
            <p>{category.text}</p>
          </div>
        ))}
      </div>
      <div className="p-2 leading-none">
        <CardHeader>{categories[activeCategory].text}</CardHeader>

        <ul className="grid grid-cols-4 gap-1 pt-4">
          {sportsCategory.map((category, index) => (
            <li className="" key={index}>
              <a className="flex flex-col items-center py-2.5 bg-[#222222] gap-2">
                <MdOutlineSportsHandball className="text-3xl" />
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Categories;
