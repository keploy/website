import React from "react";

type SearchBarProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <div className="w-full mx-auto mt-4 lg:mt-0 lg:ml-4 border border-neutral-300 rounded-lg">
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden group">
        <div className="grid place-items-center h-full w-12 text-secondary-300 bg-neutral-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 scale-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          className="input_search focus:border-t-0 border-none   focus:border-none focus:outline-none focus:text-xs w-full appearance-none bg-white rounded-sm  text-secondary-300 placeholder-secondary-100 placeholder:text-xs group-hover:placeholder:text-secondary-300 transition-all duration-300"
          id="search"
          placeholder="Search Stories.."
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
