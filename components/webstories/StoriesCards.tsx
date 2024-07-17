"use client";
import React from "react";
import StoryCard from "./StoryCard";
import { StaticImageData } from "next/image";
import Container from "@/components/webstories/components/container";

type StoriesCardProps = {
  CardImage: string | StaticImageData;
  CardDescription: string;
  Slug: string;
  Category: string[];
};

type StoriesCardsProps = {
  data: StoriesCardProps[];
  searchValue: string;
};

const StoriesCards = ({ data, searchValue }: StoriesCardsProps) => {
  const filteredData = data.filter((card) => {
    return card.CardDescription.toLowerCase().includes(
      searchValue.toLowerCase()
    );
  });

  return (
    <div className="relative bg-neutral-100 w-full min-h-screen ">
      <Container>
        <h1 className="lg:text-5xl text-4xl text-secondary-300 font-extrabold leading-tighter tracking-tighter my-4 text-center">
          Test{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-500 to-gradient-200">
            Stories
          </span>
        </h1>
        <p className="text-center text-gray-500 mt-5">
          Discover what's going on in and around Keploy. Learn about Keploy and
          everything related to testing. Tap right to read visual stories.
        </p>
        <h1 className="lg:text-3xl text-2xl text-secondary-300 font-bold leading-tighter tracking-tighter my-4 mb-5 mt-20">
          Latest Web Stories
        </h1>
        <div className="w-full  grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-5 gap-y-5 md:gap-y-10 mb-16 mt-5">
          {filteredData.map((card, key) => (
            <div key={key} className="flex">
              <StoryCard
                imagesrc={card.CardImage}
                CardDescription={card.CardDescription}
                slug={card.Slug}
                categories={card.Category}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StoriesCards;
