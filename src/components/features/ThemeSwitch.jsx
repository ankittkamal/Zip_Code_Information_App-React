import { IoMdMoon } from "react-icons/io";
import { BsSun } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setMode, toggleTheme } from "./darkModeSlice";
import { useEffect } from "react";

function ThemeSwitch() {
  const theme = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(toggleTheme());
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      className=" text-2xl fixed bottom-4 right-10 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={() => toggleDarkMode()}
    >
      {theme == "light" ? <BsSun /> : <IoMdMoon className="text-gray-200" />}
    </button>
  );
}

export default ThemeSwitch;
