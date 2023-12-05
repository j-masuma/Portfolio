import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllNotes } from "../api/http";
//import Contact from "../../Pages/contact/Contact";
const menulist = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/About",
  },
  {
    id: 3,
    title: "Passions",
    path: "/Passion",
  },
  {
    id: 4,
    title: "Portfolio",
    path: "/Port",
  },
];
export function Header() {
  const [headerData, setHeaderData] = useState("");
  useEffect(() => {
    getAllNotes().then((response) => {
      setHeaderData(response);
    });
  }, []);

  const [theme, setTheme] = useState("green");
  console.log("check the render", theme);
  useEffect(() => {
    console.log("Init", theme);
  }, [theme]);
  return (
    <div className="flex flex-row justify-between content-center p-8">
      <div>
        <h2
          className="text-blue-900 text-center font-poppins text-25 font-bold tracking-wider"
          onClick={() => setTheme("red")}
        >
          {headerData.first_name}{" "}
          <span className="text-blue-700">{headerData.last_name}</span>
        </h2>
      </div>

      <div className="flex gap-4 font-poppins">
        {menulist &&
          menulist.map((item) => (
            <div key={item.id}>
              <Link
                to={item.path}
                className=" hover:border-[1px] border-green-800 rounded-full px-3 py-1 cursor-pointer"
              >
                {item.title}
              </Link>
            </div>
          ))}
        <div className="text-white text-center font-poppins w-25 tracking-wide p-1 rounded-full bg-blue-500 hover:bg-blue-700">
          <Link to="/Contact">
            <p>Contact Me</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
