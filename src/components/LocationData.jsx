function LocationData({ data }) {
  return (
    <div className=" grid  bg-gray-300 dark:bg-slate-600  rounded-md">
      {data ? (
        <div className="text-gray-950 dark:text-gray-100 dark:bg-slate-800   mt-2  m-4 p-4 ">
          <h2 className="text-xl font-bold rounded-md w-[96%] grid justify-center mb-4 dark:bg-slate-700 bg-blue-300 p-2">
            Location Information
          </h2>
          <p className="text-xl font-semibold flex">
            <p className=" border border-blue-400 bg-blue-500 p-1  w-24">
              Country
            </p>
            <p className="border border-blue-400 p-1 w-72 dark:bg-gray-800">
              {data.country}
            </p>
          </p>
          <div className="text-lg mb-2 font-semibold flex ">
            <p className="  border border-blue-400 bg-blue-500 p-1 w-24">
              State{" "}
            </p>
            <p className="border border-blue-400 p-1 w-72  dark:bg-gray-800">
              {data.state}
            </p>
          </div>
          <div className="">
            {data.placeName.map((place, index) => (
              <Place key={index} place={place} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Place({ place }) {
  return (
    <div className="text-gray-950 dark:text-gray-50  grid mb-2   dark:bg-gray-800 font-semibold">
      <div className="flex">
        <p className="  border border-blue-400 bg-blue-500 p-1 w-28">
          Place Name{" "}
        </p>
        <p className="border border-blue-400 p-1   w-[17rem] dark:bg-gray-800 ">
          {place["place name"]}
        </p>
      </div>
      <div className="flex ">
        <p className="  border border-blue-400 bg-blue-500 p-1 w-24">State </p>
        <p className="border border-blue-400 p-1 w-72 dark:bg-gray-800 ">
          {place.state}
        </p>
      </div>
    </div>
  );
}

export default LocationData;
