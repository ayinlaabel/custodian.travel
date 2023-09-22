import React, { useState } from "react";
import { countries } from "../../utilities/countries";

interface quoteComputeProps {
  handleModal: (props: any) => any;
  modalData: string[];
}
const QuoteComputation = ({ handleModal, modalData }: quoteComputeProps) => {
  const [travellerCount, setTravellerCount] = useState(1);
  // const [modalData, setModalData] = useState<any[]>([]);
  const traveller = document.getElementById("traveller");

  const handleNewTraveller = () => {
    let travellerContainer = document.createElement("div");
    travellerContainer.className = "w-full md:w-1/3 px-3 mb-4";
    let travellerLabel = document.createElement("label");
    travellerLabel.className =
      "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2";
    travellerLabel.innerHTML = `Traveller DOB ${travellerCount + 1}`;
    travellerContainer.appendChild(travellerLabel);
    let travellerInput = document.createElement("input");
    travellerInput.className =
      "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";
    travellerInput.type = "date";
    travellerContainer.appendChild(travellerInput);
    traveller?.appendChild(travellerContainer);
    alert(travellerCount);
    setTravellerCount(travellerCount + 1);
  };

  // handleData = (e: any) => {
  //   setModalData([...modalData, e.target.value]);
  //   console.log([...modalData, e.target.value]);
  // };

  return (
    <div className="w-full h-full px-4 py-3">
      <div>
        <div className="flex flex-row gap-2 mb-4">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Select Destination
            </label>
            <div className="relative">
              <div
                className="block appearance-none w-full h-[3rem] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 overflow-hidden"
                onClick={handleModal}
              >
                <div className="w-full flex flex-row overflow-hidden pr-4">
                  {modalData.length <= 1
                    ? modalData.map((data: any) => (
                        <div className="w-fit">{data}</div>
                      ))
                    : modalData.map((data: any) => (
                        <div className="w-full">{data + ","}</div>
                      ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div> */}
            </div>
            {/* <div className="invisible">
              {countries.map((country) => (
                <div>
                  <input type="checkbox" /> <div>{country.name}</div>
                </div>
              ))}
            </div> */}
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Departure Date
            </label>
            <input
              className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="date"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Return Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="date"
            />
          </div>
        </div>
        <div>
          <div id="traveller" className="flex md:flex-row mb-4 flex-wrap">
            <div className="w-full md:w-1/3 px-3 mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Traveller DOB 1
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="date"
              />
            </div>
          </div>
          <div
            className="w-fit text-white ml-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            onClick={handleNewTraveller}
          >
            Add More Travellers
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteComputation;
