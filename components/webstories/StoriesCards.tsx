import React from "react";
import StoryCard from "./StoryCard";
type StoriesCardProps = {
  Image: string;
  CardDescription:string;
};

type StoriesCardsProps = {
  data: StoriesCardProps[];
};

const StoriesCards = ({ data }: StoriesCardsProps) => {
  return (
    <div>
      {data.map((card, index) => {
        return (
          <div key={index}> 
          <StoryCard imagesrc={card.Image} CardDescription={card.CardDescription} />
          </div>
        );
      })}
    </div>
  );
};

export default StoriesCards;
