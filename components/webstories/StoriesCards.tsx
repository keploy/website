"use client";
import React, { useRef, useState } from "react";
import StoryCard from "./StoryCard";
import { StaticImageData } from "next/image";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@/components/webstories/container";
import { DummyData } from "@/app/(default)/webstories/data";
import WebStories from "./Webstories";
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
  const [showWebBackground, setshowWebBackground] = useState(false);
  const [slug, setSlug] = useState<string>("");


  //finding the data from the DummyDate(Actually the data file now.)
  const storyData = DummyData.find((item) => item.Slug === slug)?.Story;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const AlternativeBar = () => {
    setSearchValue("");
    setSearchBarOpen(!searchBarOpen);
  };

  const filteredData = data.filter((card) => {
    return card.CardDescription.toLowerCase().includes(
      searchValue.toLowerCase()
    );
  });

  const settingSlug = (slug: string) => {
    setshowWebBackground(true);
    setSlug(slug);
  };



  return (
    <div className="relative">
      <Container>
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
              <SearchBar onChange={handleInputChange} />
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
        <div className=" w-full grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-5 gap-y-5 md:gap-y-10 mb-16 mt-5">
          {filteredData.map((card, key) => (
            <div key={key}>
              <StoryCard
                imagesrc={card.CardImage}
                CardDescription={card.CardDescription}
                slug={card.Slug}
                categories={card.Category}
                settingSlugStories={settingSlug}
              />
            </div>
          ))}
        </div>
      </Container>
      {showWebBackground && (
        <div className="fixed w-full h-full top-0 z-50 flex items-center justify-center">
          <div className="absolute w-full h-full top-0 opacity-90 bg-black"></div>
          <div className="relative flex flex-col z-10 w-full h-full justify-center">
            <button
              className="text-black font-medium bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out absolute top-4 right-4"
              onClick={() => setshowWebBackground(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {storyData ? (
              <WebStories data={storyData} />
            ) : (
              <div>Content Not Available</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StoriesCards;
