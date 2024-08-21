"use client";
import React, { useEffect, useState } from "react";
import StoryCard from "./StoryCard";
import { StaticImageData } from "next/image";
import Container from "@/components/webstories/components/container";
import SearchBar from "./components/SearchBar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const [searchValue, setSearchValue] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const filteredData = data.filter((card) => {
    return card.CardDescription.toLowerCase().includes(
      searchValue.toLowerCase()
    );
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleCloseClick = () => {
    setSearchActive(false);
    setSearchValue("");
  };

  return (
    <div className="relative bg-neutral-100 w-full my-10" data-aos="fade-up">
      <Container>
        <h1 className=" lg:text-5xl text-5xl text-secondary-300 font-extrabold leading-tighter tracking-tighter my-6 text-center">
          Test{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-500 to-gradient-200">
            Stories
          </span>
        </h1>
        <p className="text-center text-gray-500 mt-5">
          Discover what's going on in and around Keploy. Learn about Keploy and
          everything related to testing. Tap right to read visual stories.
        </p>
        <div className="flex flex-row items-center mt-20 justify-between min-h-[80px]">
          {!searchActive && (
            <h1 className="lg:text-3xl md:text-2xl text-xl text-secondary-300 font-bold leading-tighter tracking-tighter my-4 mb-5">
              Latest Web Stories
            </h1>
          )}
          <div
            className={`flex items-center ${
              searchActive ? "w-full justify-center" : ""
            }`}
          >
            {searchActive ? (
              <>
                <SearchBar onChange={handleInputChange} />
                <IconButton onClick={handleCloseClick} color="primary" className=" mt-3 lg:mt-0">
                  <CloseIcon className="text-secondary-300"/>
                </IconButton>
              </>
            ) : (
              <IconButton onClick={handleSearchClick} color="primary">
                <SearchIcon className="text-secondary-300" />
              </IconButton>
            )}
          </div>
        </div>
        <div
          className="w-full grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-5 gap-y-5 md:gap-y-10 mb-16 mt-5"
        >
          {filteredData.length > 0 ? (
            filteredData.map((card, key) => (
              <div key={key} className="flex hover:scale-101 duration-300">
                <StoryCard
                  imagesrc={card.CardImage}
                  CardDescription={card.CardDescription}
                  slug={card.Slug}
                  categories={card.Category}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full mt-2 ml-5 text-gray-500">
              No results found for your search. Please try another search.
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default StoriesCards;
