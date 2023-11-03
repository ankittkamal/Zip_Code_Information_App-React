function LocationData({ data, clearData }) {
  return (
    <div className=" grid">
      {data ? (
        <div className=" shadow-lg  mt-2 border border-orange-50 m-4 p-4 w-full bg-orange-50 ">
          <h2 className="text-xl font-bold text-red  grid justify-center mb-4">
            Location Information
          </h2>
          <p className="text-xl font-semibold mb-1 flex">
            <p className="text-white border border-blue-400 bg-blue-500 p-1  w-40">
              Country
            </p>
            <p className="border border-blue-400 p-1 w-52">{data.country}</p>
          </p>
          <div className="text-lg mb-2 font-semibold flex ">
            <p className="text-white  border border-blue-400 bg-blue-500 p-1 w-40">
              State{" "}
            </p>
            <p className="border border-blue-400 p-1 w-52 ">{data.state}</p>
          </div>
          <div className="">
            {data.placeName.map((place, index) => (
              <Place key={index} place={place} />
            ))}
          </div>

          <button
            className="mt-4 group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-500 hover:text-blue-500 rounded-full outline-none transition-all focus:scale-110 border hover:border-blue-500 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 border-[rgba(255,255,255,0.3)] text-lg"
            onClick={clearData}
          >
            Clear
          </button>
        </div>
      ) : null}
    </div>
  );
}

function Place({ place }) {
  return (
    <div className=" grid mb-2  bg-orange-50  font-semibold">
      <div className="flex">
        <p className="text-white  border border-blue-400 bg-blue-500 p-1 w-40">
          Place Name{" "}
        </p>
        <p className="border border-blue-400 p-1 w-52">{place["place name"]}</p>
      </div>
      <div className="flex ">
        <p className="text-white  border border-blue-400 bg-blue-500 p-1 w-40">
          State{" "}
        </p>
        <p className="border border-blue-400 p-1 w-52 ">{place.state}</p>
      </div>
    </div>
  );
}

export default LocationData;
