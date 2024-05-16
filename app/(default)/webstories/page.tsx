import React from "react";
import StoriesCards from "@/components/webstories/StoriesCards";
import { DummyData } from "./data"; // Import Data from data file

const page = () => {
  const Data = DummyData.map((item) => ({
    CardImage: item.CardImage,
    CardDescription: item.CardDescription,
    Slug: item.Slug,
    Category: item.Categories,
  }));
  return (
    <>
        <StoriesCards data={Data} />
    </>
  );
};

export default page;
