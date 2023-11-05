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
    const newTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      dispatch(setMode(localTheme));
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      dispatch(setDarkMode());
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className=" text-2xl fixed top-24 right-6 bg-white w-[3rem] h-[3rem] bg-opacity-60 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={() => toggleDarkMode()}
    >
      {theme == "light" ? <BsSun /> : <IoMdMoon className="text-gray-200" />}
    </button>
  );
}

export default ThemeSwitch;
