import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function InputPostalCode({ onSubmit, clearData }) {
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postalCode);
  };

  return (
    <div className="bg-gray-300 dark:bg-slate-600 p-4 rounded-md">
      <p className="text-lg text-gray-900 dark:text-gray-100">
        Please enter the details to get your desired information.
      </p>
      <div className="mt-4">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex items-center gap-4 mt-6">
            <label htmlFor="postalCode" className="text-base font-medium">
              Postal Code :
            </label>
            <input
              id="postalCode"
              className="p-2 border rounded-md outline-none dark:text-gray-50 dark:bg-gray-900"
              type="text"
              placeholder="Enter Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <button className="mt-6 group flex items-center justify-center gap-2 h-12 w-36 bg-gray-400 hover:text-blue-500 rounded-full outline-none transition-all transform hover:scale-105 focus:scale-110 border hover:border-blue-500 active:scale-95 disabled:scale-100 disabled:bg-opacity-65 border-[rgba(255,255,255,0.3)]">
              Get Location
              <FaPaperPlane className="text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </form>
        <button
          className="mt-4 group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-400 hover:text-blue-500 rounded-full outline-none transition-all focus:scale-110 border hover:border-blue-500 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 border-[rgba(255,255,255,0.3)] text-base"
          onClick={clearData}
        >
          Clear Data
        </button>
      </div>
    </div>
  );
}

export default InputPostalCode;
