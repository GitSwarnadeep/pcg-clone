import React, {useState} from "react";
import { IoIosArrowDown } from "react-icons/io";
import useCategoryStore from "../utils/store";

const FilterAccordion = ({
  title,
  filterKey,
  filters,
  setFilters,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: value,
    }));

    if (name === "category") {
      useCategoryStore.getState().setCategory(value);
    }
  };

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-left p-2 pt-5 border-t text-[#19325b]"
      >
        <span className="text-lg font-semibold flex items-center justify-between">
          {title}
          <IoIosArrowDown />
        </span>
      </button>
      {isOpen && (
        <div className="p-2 space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name={filterKey}
              value=""
              checked={filters[filterKey] === ""}
              onChange={handleFilterChange}
              className="form-radio text-blue-600 cursor-pointer"
            />
            <span className="ml-2">All Categories</span>
          </label>
          {options?.map((option, index) => (
            <label key={index} className="flex items-center">
              <input
                type="radio"
                name={filterKey}
                value={option}
                checked={filters[filterKey] === option}
                onChange={handleFilterChange}
                className="form-radio text-blue-600 cursor-pointer"
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterAccordion;
