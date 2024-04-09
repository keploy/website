import React from "react";
import Container from "@/components/webstories/container";
import StoriesCards from "@/components/webstories/StoriesCards";
import gsa from "@/public/images/gsa.png"
const page = () => {
  const dummyData = [
    {
      Image:"../../public/images/gsa.png",
      CardDescription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad autem fugiat ipsam eligendi repudiandae sed dolore est, laudantium esse quae veritatis excepturi amet deserunt nisi sapiente non? Veniam, quae!",
    },
  ];

  return (
    <>
      <Container>
        <StoriesCards data={dummyData} />
      </Container>
    </>
  );
};

export default page;
