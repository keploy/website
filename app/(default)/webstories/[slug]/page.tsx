"use client"
import React from "react";
import WebStories from "@/components/webstories/Webstories";
import { DummyData } from "../data";
import { useParams } from "next/navigation";

const Index = () => {
  const slug = useParams().slug; 
  const storyData = DummyData.find((item) => item.Slug === slug)?.Story;

  if (!storyData) {
    return <div className="m-auto">Story not found!</div>;
  }

  return (
    <div>
      <WebStories data={storyData} />
    </div>
  );
};

export default Index;
