"use client"
import React, { useRef, useState } from "react";
import StoryCard from "./StoryCard";
import { StaticImageData } from "next/image";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type StoriesCardProps = {
  CardImage: string | StaticImageData;
  CardDescription: string;
  Slug: string;
  Category: string[];
};

type StoriesCardsProps = {
  data: StoriesCardProps[];
};

const StoriesCards = ({ data }: StoriesCardsProps) => {
  const [searchBarOpen, setSearchBarOpen] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const AlternativeBar = () => {
    setSearchBarOpen(!searchBarOpen);
  };  

  const filteredData = data.filter((card) => {
    console.log(card.CardDescription);
    return card.CardDescription.toLowerCase().includes(searchValue.toLowerCase());
  });
  
  return (
    <>
      <h1 className="lg:text-5xl text-4xl text-secondary-300 font-extrabold leading-tighter tracking-tighter my-4 text-center">
        Keploy Web-Stories
      </h1>
      <p className="text-center text-gray-500">
        Discover what's going on in and around Keploy. Learn about Keploy and
        everything related to testing. Tap right to read visual stories.
      </p>
      <div className="flex flex-row justify-end my-2 mt-10">
        {searchBarOpen ? (
          <button onClick={AlternativeBar}>
            <FontAwesomeIcon
              icon={faSearch}
              className="size-5 bg-secondary-300 text-white p-2 rounded-full"
            />
          </button>
        ) : (
          <>
            <SearchBar ref={inputRef} onChange={handleInputChange} />
            <button onClick={AlternativeBar} className="ml-2">
              <FontAwesomeIcon
                icon={faTimes}
                className="size-5 bg-secondary-300 text-white p-2 rounded-full"
              />
            </button>
          </>
        )}
      </div>
      <hr className="mb-10 border-t border-gray-300" />
      <h1 className="lg:text-3xl text-2xl text-secondary-300 font-bold leading-tighter tracking-tighter my-4 mb-5">
        Latest Web-Stories
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-8 gap-y-5 md:gap-y-5 mb-16 mt-5">
        {filteredData.map((card, index) => (
          <div key={index} className="">
            <StoryCard
              imagesrc={card.CardImage}
              CardDescription={card.CardDescription}
              slug={card.Slug}
              categories={card.Category}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default StoriesCards;
