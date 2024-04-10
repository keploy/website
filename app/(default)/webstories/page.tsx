import React from "react";
import Container from "@/components/webstories/container";
import StoriesCards from "@/components/webstories/StoriesCards";
import { DummyData } from "./data"; // Import DummyData from data file

const page = () => {
  // Map DummyData to extract the required properties
  const Data = DummyData.map((item) => ({
    CardImage: item.CardImage,
    CardDescription: item.CardDescription,
    Slug: item.Slug,
  }));

  return (
    <>
      <Container>
        <StoriesCards data={Data} />
      </Container>
    </>
  );
};

export default page;
