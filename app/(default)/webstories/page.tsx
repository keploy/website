import React from "react";
import StoriesCards from "@/components/webstories/StoriesCards";
import { DummyData } from "./data"; // Import Data from data file
import Header from "@/components/webstories/components/Header";
const page = () => {
  const Data = DummyData.map((item) => ({
    CardImage: item.CardImage,
    CardDescription: item.CardDescription,
    Slug: item.Slug,
    Category: item.Categories,
  }));
  return (
    <>
      <Header />

      <StoriesCards data={Data} />
    </>
  );
};

export default page;
