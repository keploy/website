import React from 'react';

type SearchBarProps = {
  ref: React.RefObject<HTMLInputElement>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ ref, onChange }: SearchBarProps) => {
  return (
    <div className="w-full mx-auto">
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white gap-2 overflow-hidden">
        <div className="grid place-items-center border border-black p-2 rounded-full bg-secondary-300 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          ref={ref}
          className="peer h-full w-full border-none focus:outline-none border border-r-0 text-sm pr-2 appearance-none border-transparent"
          type="text"
          id="search"
          placeholder="Search something.."
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
