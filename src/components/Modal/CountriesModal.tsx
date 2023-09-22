import { useState } from "react";
import { countries } from "../../utilities/countries";
import { modal } from "./interface";

const CountriesModal = ({ show, handleModal, handleData }: modal) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<any[]>([]);
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${
        show ? "" : "invisible"
      }`}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#000]/80 cursor-pointer"
        onClick={handleModal}
      ></div>
      <div className="absolute inset-y-0  flex items-center justify-center">
        <div className="bg-[#fff] w-[70rem] h-[35rem] overflow-hidden">
          <div>
            <div className="relative p-4">
              <div className="absolute inset-y-0 left-4  flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-1/2 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#444]/5 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#444]/5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for your destination..."
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="px-8 w-[70rem] h-[35rem] overflow-scroll pb-8">
              <div className="flex flex-wrap gap-1 ">
                {countries
                  .filter(
                    (e) =>
                      e.name.toLowerCase().includes(query.toLowerCase()) ||
                      e.code.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((country: any, index: any) => (
                    <div
                      key={index}
                      className="md:min-w-fit rounded-full h-[2rem] flex items-center px-4 py-5 bg-[#444]/25 mb-2"
                    >
                      <div className="mr-2">
                        <input
                          type="checkbox"
                          value={country.name}
                          onChange={handleData}
                        />
                      </div>
                      {country.name}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesModal;
