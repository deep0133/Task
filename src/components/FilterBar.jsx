import React from "react";
import { FaChevronDown } from "react-icons/fa";

const FilterBar = () => {
  const filters = [
    { label: "Project Status", id: "status" },
    { label: "Project Type", id: "type" },
    { label: "Location", id: "location" },
    { label: "Budget", id: "budget" },
  ];

  return (
    <div className=' items-end gap-4 py-[6rem] inner_responsiveWidth grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 grid xl:grid-cols-5'>
      {filters.map((filter) => (
        <div key={filter.id} className='flex flex-col'>
          <label className='text-sm lg:text-[1.25rem] font-medium mb-3'>
            {filter.label}
          </label>
          <div className='relative'>
            <select className='appearance-none text-[1rem] md:max-w-[19.75rem] min-h-[4.38rem] w-full px-4 bg-gray-100 text-sm text-gray-700 rounded shadow focus:outline-none'>
              <option>Any</option>
            </select>
            <FaChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs pointer-events-none' />
          </div>
        </div>
      ))}
      <div>
        <button className='bg-[#2c4560] w-full text-white px-6 min-h-[4.38rem] text-[1.31rem] rounded-full hover:bg-[#1f3348] transition'>
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
