import React from "react";
import StoryCard from "./StoryCard";
type StoriesCardProps = {
  Image: string;
  CardDescription: string;
  Slug:string;
};

type StoriesCardsProps = {
  data: StoriesCardProps[];
};

const StoriesCards = ({ data }: StoriesCardsProps) => {
  return (
    <>
      <h1 className="text-2xl text-center mt-5 mb-5">Web-Stories</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:gap-x-8 lg:gap-x-8 gap-y-16 md:gap-y-16 mb-16">
        {data.map((card, index) => {
          return (
            <div key={index}>
              <StoryCard
                imagesrc={card.Image}
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
