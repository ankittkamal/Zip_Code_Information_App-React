import { useState } from "react";
import LocationData from "./components/LocationData";
import InputPostalCode from "./components/InputPostalCode";
import { ImSpinner3 } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFileCode } from "react-icons/bs";
import ThemeSwitch from "./components/features/ThemeSwitch";
import { useDispatch, useSelector } from "react-redux";
import {
  clearLocationData,
  setLocationData,
} from "./components/utils/locationSlice";

function App() {
  const dispatch = useDispatch();
  const locationData = useSelector((state) => state.location.data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (postalCode) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.zippopotam.us/in/${postalCode}`
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(
          setLocationData({
            country: data.country,
            state: data.places[0].state,
            placeName: data.places,
          })
        );
        setError(null);
      } else {
        setError("Indian Postal code not found.");
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    }

    setLoading(false);
  };

  const clearData = () => {
    dispatch(clearLocationData());
  };

  return (
    <>
      {" "}
      <Header /> <ThemeSwitch />
      <div className="h-screen bg-gradient-to-b from-gray-50 to-gray-900 dark:from-black dark:to-gray-50 text-gray-950 dark:text-gray-50 dark:text-opacity-90 grid grid-cols-2 justify-center">
        <div className="flex flex-col mt-8 items-center p-4 space-y-4 grid-cols-1 ">
          <InputPostalCode onSubmit={fetchData} t />
          {loading && (
            <div className="text-5xl text-gray-800 absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
              <ImSpinner3 className="animate-spin dark:text-white" />
            </div>
          )}
          {error && (
            <p className="text-xl text-red-600 font-medium">Error: {error}</p>
          )}
        </div>
        <div className="grid-cols-1  mt-8 items-center p-4 space-y-4 mx-36 ">
          <LocationData data={locationData} clearData={clearData} />
        </div>
      </div>
      <div className="h-screen bg-gradient-to-t from-gray-50 to-gray-900 dark:from-black dark:to-gray-50 text-gray-950 dark:text-gray-50 dark:text-opacity-90  justify-center">
        <Footer />
      </div>
    </>
  );
}

function Header() {
  const openGit = () => {
    window.open(
      "https://github.com/ankittkamal/Zip_Code_Information_App-React",
      "_blank"
    );
  };

  return (
    <div className="flex justify-between p-4 font-semibold bg-gradient-to-b from-gray-50 to-gray-900 dark:from-black dark:to-gray-50 dark:text-gray-100 ">
      <h1 className="text-3xl flex items-center gap-2">
        <p>Zip Code Information App</p> <BsFileCode />
      </h1>
      <div
        className="text-3xl cursor-pointer flex items-center gap-1"
        onClick={() => openGit()}
      >
        <p>Code</p> <AiOutlineGithub />
      </div>
    </div>
  );
}
export const Footer = () => {
  return (
    <div className="flex mob:flex-col justify-around w-full shadow h-14 bg-yellow text-blue-dark text-center leading-[3.5rem] bottom-0  z-40 bg-blue-50 ">
      <span className="text-left mob:text-xs mob:text-center">
        Zip Code Information App <span className="text-red">&#169;</span> 2023
      </span>
      <span className="text-center mob:text-xs">
        Developed By{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://ankittkamal.vercel.app/"
          className="underline"
        >
          Ankit Kamal{" "}
        </a>
      </span>
    </div>
  );
};

export default App;
