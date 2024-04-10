import React from "react";
import StoryCard from "./StoryCard";
import { StaticImageData } from "next/image";
type StoriesCardProps = {
  CardImage: string | StaticImageData;
  CardDescription: string;
  Slug: string;
};

type StoriesCardsProps = {
  data: StoriesCardProps[];
};

const StoriesCards = ({ data }: StoriesCardsProps) => {
  return (
    <>
      <h1 className="lg:text-5xl text-4xl text-secondary-300 font-extrabold leading-tighter tracking-tighter my-4  text-center ">Keploy Web-Stories</h1>
      <p className="text-center text-gray-500">
        Discover what's going on in and around Keploy. Learn about Keploy and
        everything related to testing. Tap right to read visual stories.
      </p>
      <hr className="my-10 border-t border-gray-300"/>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-8 gap-y-16 md:gap-y-16 mb-16 mt-5">
        {data.map((card, index) => {
          return (
            <div key={index}>
              <StoryCard
                imagesrc={card.CardImage}
                CardDescription={card.CardDescription}
                slug={card.Slug}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StoriesCards;
