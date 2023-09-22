import React from "react";

const SelectPlan: React.FC = () => {
  return (
    <div className="w-full h-full px-9 py-5">
      <div>Travel Plan</div>
      <table className="w-full text-sm text-left text-[#0f0f0f] shadow-md max-w-full max-h-full">
        <thead className="text-xs text-[#F8F7FF] uppercase bg-[#a73439]">
          <tr>
            <th className="w-1/4 px-4 py-2">Name</th>
            <th className="w-1/4 px-4 py-2">Actual Premium</th>
            <th className="w-1/4 px-4 py-2">Traveller</th>
            <th className="w-1/4 px-4 py-2">Select</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white odd:bg-[#D9D9D9] ... border-b  justify-center">
            <td className="border px-4 py-2 uppercase">Gold</td>
            <td className="border px-4 py-2">1000</td>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2 uppercase">
              <input type="radio" name="plan" />
            </td>
          </tr>
          <tr className="bg-white odd:bg-[#D9D9D9] ... border-b  justify-center">
            <td className="border px-4 py-2 uppercase">Silver</td>
            <td className="border px-4 py-2">9000</td>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2 uppercase">
              <input type="radio" name="plan" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SelectPlan;
