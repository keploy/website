"use client";
import React, { useState } from "react";
import StoriesCards from "@/components/webstories/StoriesCards";
import { DataFiles } from "@/components/utils/data";
import Header from "@/components/webstories/components/Header";
import RootLayout from "@/app/layout";

const Page = () => {
 

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
  };

  return (
    <RootLayout metadata={metadata}> 
      <div className="flex flex-row justify-end my-2 mt-10 border bg-neutral-100 min-h-screen overflow-hidden">
        <StoriesCards data={Data.reverse()} />
      </div>
   </RootLayout>
  );
};

export default Page;
