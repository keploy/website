"use client";
import React, { useState } from "react";
import StoriesCards from "@/components/webstories/StoriesCards";
import { DataFiles } from "../../../components/utils/data";
import Header from "@/components/webstories/components/Header";
import RootLayout from "@/app/layout";

const Page = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const Data = DataFiles.map((item) => ({
    CardImage: item.CardImage,
    CardDescription: item.CardDescription,
    Slug: item.Slug,
    Category: item.Categories,
  }));

  const metadata = {
    title: "WebStories - Explore and Enjoy",
    description: "Discover amazing stories with our WebStories collection.",
    keywords: "webstories, stories, entertainment, reading",
    image: "/public/images/gsa.png",
    url: "https://yourwebsite.com/webstories",
  };

  return (
    <RootLayout metadata={metadata}>
      <Header handleInputChange={handleInputChange} />
      <div className="flex flex-row justify-end my-2 mt-10">
        <StoriesCards data={Data.reverse()} searchValue={searchValue} />
      </div>
    </RootLayout>
  );
};

export default Page;
