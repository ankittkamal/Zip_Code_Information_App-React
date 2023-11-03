// PostalCodeForm.js
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function InputPostalCode({ onSubmit }) {
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postalCode);
  };

  return (
    <div className=" shadow-lg  mt-2 border border-gray-300 m-4 p-4 w-full bg-gray-300">
      <div className="text-xl font-semibold text-gray-900">
        <p className="bg-blue-300 p-2">
          Enter the details to get your desired Information
        </p>
      </div>
      <div className="mt-4">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-4 mt-6">
            <p className="text-base font-medium">Postal Code :</p>
            <input
              className="p-1 rounded-md  outline-none   "
              type="text"
              placeholder="Enter Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <button className=" mt-6 group flex items-center justify-center gap-2 h-[3rem] w-[9rem] bg-gray-400  hover:text-blue-500 rounded-full outline-none transition-all focus:scale-110 border hover:border-blue-500  active:scale-105  disabled:scale-100 disabled:bg-opacity-65 border-[rgba(255,255,255,0.3)]">
            <>
              Get Location
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </>
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputPostalCode;
