import { useState } from "react";
import LocationData from "./components/LocationData";
import InputPostalCode from "./components/InputPostalCode";
import { ImSpinner3 } from "react-icons/im";

function App() {
  const [locationData, setLocationData] = useState(null);
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
        setLocationData({
          country: data.country,
          state: data.places[0].state,
          placeName: data.places,
        });
        setError(null);
      } else {
        setError("Indian Postal code not found. ");
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    }

    setLoading(false);
  };

  const clearData = () => {
    setLocationData(null);
  };

  return (
    <>
      <div className="  flex justify-center border border-gray-400 p-4  bg-slate-400 mx-96 rounded-sm		">
        <h1 className="text-3xl mt-2 ">Zip Code Information App</h1>
      </div>
      <div className=" mt-2  ">
        <div className="grid justify-center mt-8 ">
          <div>
            <InputPostalCode onSubmit={fetchData} />
          </div>
          <div className="text-4xl text-blue-400 grid justify-center">
            {loading && (
              <p>
                <ImSpinner3 className="animate-spin" />
              </p>
            )}
          </div>
          <div className="mx-5 m-2">
            {error && (
              <p className="text-xl text-red-600 font-medium">Error: {error}</p>
            )}
          </div>

          <div>
            <LocationData data={locationData} clearData={clearData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
